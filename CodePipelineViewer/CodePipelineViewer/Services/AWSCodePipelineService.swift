import Foundation
import AWSCodePipeline

actor AWSCodePipelineService {
    private let client: CodePipelineClient

    init() async throws {
        let config = try await CodePipelineClient.CodePipelineClientConfig()
        self.client = CodePipelineClient(config: config)
    }

    func getPipelineNames() async throws -> [String] {
        let response = try await client.listPipelines(input: ListPipelinesInput())

        let names = response.pipelines?.compactMap(\.name) ?? []
        return names.sorted()
    }

    func fetchPipelines(names: [String]) async throws -> [PipelineResponse] {
        try await withThrowingTaskGroup(of: PipelineResponse?.self) { group in
            for name in names {
                group.addTask {
                    try await self.fetchPipelineDetails(name: name)
                }
            }

            var pipelines: [PipelineResponse] = []
            for try await pipeline in group {
                if let pipeline {
                    pipelines.append(pipeline)
                }
            }

            // Sort to match the order of requested names
            return pipelines.sorted { a, b in
                (names.firstIndex(of: a.name) ?? 0) < (names.firstIndex(of: b.name) ?? 0)
            }
        }
    }

    private func fetchPipelineDetails(name: String) async throws -> PipelineResponse? {
        let detailResponse = try await client.getPipeline(input: GetPipelineInput(name: name))
        let stateResponse = try await client.getPipelineState(input: GetPipelineStateInput(name: name))

        guard let pipelineDeclaration = detailResponse.pipeline else { return nil }

        let stages = (pipelineDeclaration.stages ?? []).map { stageDeclaration in
            mapStage(stageDeclaration: stageDeclaration, stateResponse: stateResponse)
        }

        return PipelineResponse(name: name, stages: stages)
    }

    private func mapStage(
        stageDeclaration: CodePipelineClientTypes.StageDeclaration,
        stateResponse: GetPipelineStateOutput
    ) -> StageInfo {
        let stageName = stageDeclaration.name ?? "Unknown"

        let matchingState = stateResponse.stageStates?.first { state in
            state.stageName == stageName
        }

        let actions = (matchingState?.actionStates ?? []).map { actionState in
            mapAction(actionState: actionState)
        }

        return StageInfo(name: stageName, actions: actions)
    }

    private func mapAction(actionState: CodePipelineClientTypes.ActionState) -> ActionInfo {
        let name = actionState.actionName ?? "Unknown"

        let execution: LatestExecutionInfo?
        if let exec = actionState.latestExecution {
            let status: PipelineStatus? = {
                guard let statusValue = exec.status else { return nil }
                switch statusValue {
                case .inprogress: return .inProgress
                case .succeeded: return .succeeded
                case .failed: return .failed
                case .abandoned: return .unknown
                default: return .unknown
                }
            }()

            let lastStatusChange: Date? = {
                if let timestamp = exec.lastStatusChange {
                    return Date(timeIntervalSince1970: timestamp.timeIntervalSince1970)
                }
                return nil
            }()

            let externalURL: URL? = {
                if let urlString = exec.externalExecutionUrl {
                    return URL(string: urlString)
                }
                return nil
            }()

            let errorDetails: ErrorDetails? = {
                if let ed = exec.errorDetails {
                    return ErrorDetails(code: ed.code, message: ed.message)
                }
                return nil
            }()

            execution = LatestExecutionInfo(
                status: status,
                summary: exec.summary,
                lastStatusChange: lastStatusChange,
                externalExecutionURL: externalURL,
                percentComplete: exec.percentComplete.map { Int($0) },
                errorDetails: errorDetails
            )
        } else {
            execution = nil
        }

        return ActionInfo(name: name, latestExecution: execution)
    }
}
