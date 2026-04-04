import Foundation

struct PipelineResponse: Identifiable, Equatable {
    var id: String { name }
    let name: String
    let stages: [StageInfo]

    var overallStatus: PipelineStatus {
        let allActions = stages.flatMap(\.actions)

        if allActions.contains(where: { $0.latestExecution?.status == .inProgress }) {
            return .inProgress
        }
        if allActions.contains(where: { $0.latestExecution?.status == .failed }) {
            return .failed
        }
        if allActions.allSatisfy({ $0.latestExecution?.status == .succeeded }) {
            return .succeeded
        }
        return .unknown
    }

    var latestCommitMessage: String? {
        guard let firstAction = stages.first?.actions.first,
              let summary = firstAction.latestExecution?.summary,
              let data = summary.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
              let commitMessage = json["CommitMessage"] as? String else {
            return nil
        }
        return commitMessage
    }
}

struct StageInfo: Identifiable, Equatable {
    var id: String { name }
    let name: String
    let actions: [ActionInfo]

    var stageStatus: PipelineStatus {
        let statuses = actions.map { $0.latestExecution?.status ?? .unknown }
        if statuses.contains(.failed) { return .failed }
        if statuses.allSatisfy({ $0 == .succeeded }) { return .succeeded }
        if statuses.contains(.inProgress) { return .inProgress }
        return .unknown
    }
}

struct ActionInfo: Identifiable, Equatable {
    var id: String { name }
    let name: String
    let latestExecution: LatestExecutionInfo?
}

struct LatestExecutionInfo: Equatable {
    let status: PipelineStatus?
    let summary: String?
    let lastStatusChange: Date?
    let externalExecutionURL: URL?
    let percentComplete: Int?
    let errorDetails: ErrorDetails?
}

struct ErrorDetails: Equatable {
    let code: String?
    let message: String?
}
