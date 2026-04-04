import SwiftUI

struct PipelinePickerView: View {
    @Environment(PipelineViewModel.self) private var viewModel
    @State private var searchText = ""

    private var filteredNames: [String] {
        let all = viewModel.allPipelineNames
        if searchText.isEmpty {
            return all
        }
        return all.filter {
            $0.localizedCaseInsensitiveContains(searchText)
        }
    }

    var body: some View {
        VStack(spacing: 0) {
            // Header
            HStack {
                Button {
                    withAnimation(.easeInOut(duration: 0.2)) {
                        viewModel.showingPipelinePicker = false
                    }
                } label: {
                    Image(systemName: "chevron.left")
                        .font(.body.bold())
                }
                .buttonStyle(.plain)

                Text("Add Pipeline")
                    .font(.headline)
                Spacer()
            }
            .padding(16)

            Divider()

            // Search
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
            .padding(.vertical, 12)

            // List
            if filteredNames.isEmpty {
                VStack(spacing: 8) {
                    Image(systemName: "tray")
                        .font(.title)
                        .foregroundStyle(.secondary)
                    Text("No pipelines available")
                        .font(.subheadline)
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
            }
        }
    }
}
