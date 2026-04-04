import SwiftUI

struct ActionRowView: View {
    let action: ActionInfo

    private var status: PipelineStatus {
        action.latestExecution?.status ?? .unknown
    }

    private var formattedTime: String {
        guard let date = action.latestExecution?.lastStatusChange else {
            return "Unknown"
        }
        let formatter = RelativeDateTimeFormatter()
        formatter.unitsStyle = .abbreviated
        return formatter.localizedString(for: date, relativeTo: Date())
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack(spacing: 6) {
                Image(systemName: status.sfSymbol)
                    .foregroundStyle(status.color)
                    .font(.caption)

                Text(action.name)
                    .font(.system(.caption, design: .monospaced, weight: .semibold))
                    .foregroundStyle(status.color)

                Spacer()

                if let url = action.latestExecution?.externalExecutionURL {
                    Button {
                        NSWorkspace.shared.open(url)
                    } label: {
                        Image(systemName: "arrow.up.right.square")
                            .font(.caption)
                            .foregroundStyle(.blue)
                    }
                    .buttonStyle(.plain)
                    .help("Open in browser")
                }
            }

            Text(formattedTime)
                .font(.caption2)
                .foregroundStyle(.tertiary)

            // Error details
            if let errorDetails = action.latestExecution?.errorDetails {
                VStack(alignment: .leading, spacing: 2) {
                    if let code = errorDetails.code {
                        Text("Error: \(code)")
                            .font(.caption2.bold())
                    }
                    if let message = errorDetails.message {
                        Text(message)
                            .font(.caption2)
                            .lineLimit(3)
                    }
                }
                .foregroundStyle(.red)
                .padding(6)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(.red.opacity(0.08), in: RoundedRectangle(cornerRadius: 4))
            }
        }
        .padding(.vertical, 4)
        .padding(.horizontal, 8)
        .background(.quaternary.opacity(0.2), in: RoundedRectangle(cornerRadius: 6))
    }
}
