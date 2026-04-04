import SwiftUI

struct StageProgressView: View {
    let pipeline: PipelineResponse

    var body: some View {
        HStack(spacing: 0) {
            ForEach(Array(pipeline.stages.enumerated()), id: \.element.id) { index, stage in
                Circle()
                    .fill(stage.stageStatus.color)
                    .frame(width: 10, height: 10)
                    .shadow(color: stage.stageStatus.color.opacity(0.4), radius: 2)
                    .help(stage.name)

                if index < pipeline.stages.count - 1 {
                    Rectangle()
                        .fill(.secondary.opacity(0.3))
                        .frame(height: 1.5)
                        .frame(maxWidth: .infinity)
                }
            }
        }
    }
}
