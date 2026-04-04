import SwiftUI

enum PipelineStatus: String, Equatable {
    case inProgress = "InProgress"
    case succeeded = "Succeeded"
    case failed = "Failed"
    case unknown = "Unknown"

    var color: Color {
        switch self {
        case .inProgress: .yellow
        case .succeeded: .green
        case .failed: .red
        case .unknown: .gray
        }
    }

    var sfSymbol: String {
        switch self {
        case .inProgress: "arrow.trianglehead.2.clockwise"
        case .succeeded: "checkmark.circle.fill"
        case .failed: "xmark.circle.fill"
        case .unknown: "questionmark.circle"
        }
    }

    var label: String {
        switch self {
        case .inProgress: "In Progress"
        case .succeeded: "Succeeded"
        case .failed: "Failed"
        case .unknown: "Unknown"
        }
    }
}
