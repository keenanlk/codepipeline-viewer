import SwiftUI

struct ContentView: View {
    @Environment(PipelineViewModel.self) private var viewModel

    var body: some View {
        Group {
            if viewModel.isLoading {
                ProgressView("Loading pipelines...")
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
            } else if viewModel.selectedPipelineNames.isEmpty {
                EmptyStateView()
            } else {
                PipelineListView()
            }
        }
        .background(.ultraThinMaterial)
        .onAppear {
            viewModel.start()
        }
    }
}

#Preview {
    ContentView()
        .environment(PipelineViewModel())
        .frame(width: 400, height: 700)
}
