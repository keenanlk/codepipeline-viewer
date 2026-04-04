import SwiftUI

struct EmptyStateView: View {
    @Environment(PipelineViewModel.self) private var viewModel
    @State private var searchText = ""

    private var filteredNames: [String] {
        if searchText.isEmpty {
            return viewModel.allPipelineNames
        }
        return viewModel.allPipelineNames.filter {
            $0.localizedCaseInsensitiveContains(searchText)
        }
    }

    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 8) {
                Image(systemName: "arrow.triangle.branch")
                    .font(.system(size: 40))
                    .foregroundStyle(.secondary)
                Text("CodePipeline Viewer")
                    .font(.title2.bold())
                Text("Select a pipeline to get started")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
            .padding(.top, 40)
            .padding(.bottom, 20)

            Divider()

            // Search field
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundStyle(.secondary)
                TextField("Search pipelines...", text: $searchText)
                    .textFieldStyle(.plain)
                if !searchText.isEmpty {
                    Button {
                        searchText = ""
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundStyle(.secondary)
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(10)
            .background(.quaternary.opacity(0.5), in: RoundedRectangle(cornerRadius: 8))
            .padding(.horizontal, 16)
            .padding(.top, 12)

            // Pipeline list
            if viewModel.allPipelineNames.isEmpty {
                VStack(spacing: 8) {
                    ProgressView()
                    Text("Loading available pipelines...")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            } else {
                ScrollView {
                    LazyVStack(spacing: 0) {
                        ForEach(filteredNames, id: \.self) { name in
                            let isSelected = viewModel.selectedPipelineNames.contains(name)

                            Button {
                                if isSelected {
                                    viewModel.removePipeline(name)
                                } else {
                                    viewModel.addPipeline(name)
                                }
                            } label: {
                                HStack {
                                    Text(name)
                                        .font(.system(.body, design: .monospaced))
                                        .lineLimit(1)
                                        .foregroundStyle(isSelected ? .secondary : .primary)
                                    Spacer()
                                    if isSelected {
                                        Image(systemName: "checkmark.circle.fill")
                                            .foregroundStyle(.green)
                                    } else {
                                        Image(systemName: "plus.circle")
                                            .foregroundStyle(.blue)
                                    }
                                }
                                .padding(.horizontal, 16)
                                .padding(.vertical, 10)
                                .contentShape(Rectangle())
                            }
                            .buttonStyle(.plain)

                            if name != filteredNames.last {
                                Divider()
                                    .padding(.leading, 16)
                            }
                        }
                    }
                }
                .padding(.top, 8)
            }
        }
    }
}
