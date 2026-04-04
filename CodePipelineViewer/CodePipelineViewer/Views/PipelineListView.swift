import SwiftUI

struct PipelineListView: View {
    @Environment(PipelineViewModel.self) private var viewModel

    var body: some View {
        if viewModel.showingPipelinePicker {
            PipelinePickerView()
        } else {
            VStack(spacing: 0) {
                // Header
                HStack {
                    Text("Pipelines")
                        .font(.title2.bold())
                    Spacer()
                    Button {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            viewModel.showingPipelinePicker = true
                        }
                    } label: {
                        Image(systemName: "plus.circle.fill")
                            .font(.title3)
                            .symbolRenderingMode(.hierarchical)
                    }
                    .buttonStyle(.plain)
                    .help("Add Pipeline")
                }
                .padding(.horizontal, 16)
                .padding(.top, 16)
                .padding(.bottom, 12)

                // Error banner
                if let error = viewModel.error {
                    HStack(spacing: 6) {
                        Image(systemName: "exclamationmark.triangle.fill")
                            .foregroundStyle(.yellow)
                        Text(error)
                            .font(.caption)
                            .lineLimit(2)
                        Spacer()
                        Button("Retry") {
                            Task { await viewModel.refresh() }
                        }
                        .font(.caption.bold())
                    }
                    .padding(10)
                    .background(.red.opacity(0.1), in: RoundedRectangle(cornerRadius: 8))
                    .padding(.horizontal, 16)
                    .padding(.bottom, 8)
                }

                // Pipeline cards
                ScrollView {
                    LazyVStack(spacing: 12) {
                        ForEach(viewModel.pipelines) { pipeline in
                            PipelineRowView(pipeline: pipeline)
                        }
                    }
                    .padding(.horizontal, 16)
                    .padding(.bottom, 16)
                }
            }
        }
    }
}
