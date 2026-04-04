import Foundation
import AppKit

@Observable
final class PipelineViewModel {
    var pipelines: [PipelineResponse] = []
    var allPipelineNames: [String] = []
    var selectedPipelineNames: [String] = [] {
        didSet {
            UserDefaults.standard.set(selectedPipelineNames, forKey: "selectedPipelines")
        }
    }
    var isLoading = false
    var error: String?
    var showingPipelinePicker = false

    var availablePipelineNames: [String] {
        allPipelineNames.filter { !selectedPipelineNames.contains($0) }
    }

    private var service: AWSCodePipelineService?
    private var pollingTask: Task<Void, Never>?
    private var previousStatuses: [String: PipelineStatus] = [:]

    init() {
        selectedPipelineNames = UserDefaults.standard.stringArray(forKey: "selectedPipelines") ?? []
    }

    func start() {
        Task {
            do {
                service = try await AWSCodePipelineService()
                await NotificationService.shared.requestPermission()
                await loadAllPipelineNames()
                await refresh()
                startPolling()
            } catch {
                self.error = "Failed to initialize AWS: \(error.localizedDescription)"
            }
        }
    }

    func addPipeline(_ name: String) {
        guard !selectedPipelineNames.contains(name) else { return }
        selectedPipelineNames.append(name)
        Task { await refresh() }
    }

    func removePipeline(_ name: String) {
        selectedPipelineNames.removeAll { $0 == name }
        pipelines.removeAll { $0.name == name }
    }

    func refresh() async {
        guard let service, !selectedPipelineNames.isEmpty else {
            pipelines = []
            return
        }

        if pipelines.isEmpty {
            isLoading = true
        }

        do {
            let fetched = try await service.fetchPipelines(names: selectedPipelineNames)
            checkForCompletions(newPipelines: fetched)
            pipelines = fetched
            error = nil
        } catch {
            self.error = error.localizedDescription
        }

        isLoading = false
    }

    func loadAllPipelineNames() async {
        guard let service else { return }
        do {
            allPipelineNames = try await service.getPipelineNames()
        } catch {
            self.error = "Failed to load pipeline names: \(error.localizedDescription)"
        }
    }

    private func startPolling() {
        pollingTask?.cancel()
        pollingTask = Task { [weak self] in
            while !Task.isCancelled {
                let interval: UInt64 = await MainActor.run {
                    NSApp.isActive ? 30 : 60
                }
                try? await Task.sleep(for: .seconds(interval))
                guard !Task.isCancelled else { break }
                await self?.refresh()
            }
        }
    }

    private func checkForCompletions(newPipelines: [PipelineResponse]) {
        for pipeline in newPipelines {
            guard let lastStage = pipeline.stages.last,
                  let lastAction = lastStage.actions.last,
                  let execution = lastAction.latestExecution,
                  execution.status == .succeeded else { continue }

            let previousStatus = previousStatuses[pipeline.name]
            if previousStatus != .succeeded,
               let changeDate = execution.lastStatusChange,
               Date().timeIntervalSince(changeDate) < 60 {
                NotificationService.shared.sendPipelineSucceeded(name: pipeline.name)
            }

            previousStatuses[pipeline.name] = execution.status
        }
    }
}
