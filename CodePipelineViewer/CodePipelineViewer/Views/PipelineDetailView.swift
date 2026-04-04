import SwiftUI

struct PipelineDetailView: View {
    let pipeline: PipelineResponse
    @Environment(PipelineViewModel.self) private var viewModel

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Latest commit message
            if let commitMessage = pipeline.latestCommitMessage {
                HStack(alignment: .top, spacing: 6) {
                    Image(systemName: "text.quote")
                        .foregroundStyle(.secondary)
                        .font(.caption)
                    Text(commitMessage)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                        .italic()
                        .lineLimit(2)
                }
                .padding(8)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(.quaternary.opacity(0.3), in: RoundedRectangle(cornerRadius: 6))
                .padding(.bottom, 10)
            }

            // Stages
            ForEach(Array(pipeline.stages.enumerated()), id: \.element.id) { index, stage in
                VStack(alignment: .leading, spacing: 4) {
                    Text(stage.name)
                        .font(.subheadline.bold())
                        .foregroundStyle(.primary)
                        .padding(.bottom, 2)

                    ForEach(stage.actions) { action in
                        ActionRowView(action: action)
                    }
                }

                if index < pipeline.stages.count - 1 {
                    Divider()
                        .padding(.vertical, 8)
                }
            }

            // Remove button
            Divider()
                .padding(.vertical, 8)

            Button(role: .destructive) {
                withAnimation {
                    viewModel.removePipeline(pipeline.name)
                }
            } label: {
                HStack {
                    Image(systemName: "trash")
                    Text("Remove Pipeline")
                }
                .font(.caption)
                .frame(maxWidth: .infinity)
            }
            .buttonStyle(.plain)
            .foregroundStyle(.red)
        }
    }
}
