import SwiftUI

struct PipelineRowView: View {
    let pipeline: PipelineResponse
    @State private var isExpanded = false
    @State private var isHovered = false

    var body: some View {
        VStack(spacing: 0) {
            DisclosureGroup(isExpanded: $isExpanded) {
                PipelineDetailView(pipeline: pipeline)
                    .padding(.top, 8)
            } label: {
                VStack(alignment: .leading, spacing: 8) {
                    HStack {
                        Text(pipeline.name)
                            .font(.system(.headline, design: .monospaced))
                            .lineLimit(1)
                        Spacer()
                        Image(systemName: pipeline.overallStatus.sfSymbol)
                            .foregroundStyle(pipeline.overallStatus.color)
                            .font(.callout)
                            .symbolEffect(.pulse, isActive: pipeline.overallStatus == .inProgress)
                    }

                    HStack(spacing: 8) {
                        StageProgressView(pipeline: pipeline)

                        Image(systemName: "chevron.right")
                            .font(.caption2.bold())
                            .foregroundStyle(.secondary)
                            .rotationEffect(.degrees(isExpanded ? 90 : 0))
                            .animation(.easeInOut(duration: 0.2), value: isExpanded)
                    }
                }
                .contentShape(Rectangle())
            }
            .disclosureGroupStyle(CardDisclosureStyle())
        }
        .padding(12)
        .background {
            RoundedRectangle(cornerRadius: 10, style: .continuous)
                .fill(isHovered ? Color.primary.opacity(0.05) : Color.clear)
                .background {
                    RoundedRectangle(cornerRadius: 10, style: .continuous)
                        .fill(.background)
                }
                .shadow(color: .black.opacity(0.08), radius: 4, y: 2)
        }
        .overlay(alignment: .leading) {
            RoundedRectangle(cornerRadius: 2)
                .fill(pipeline.overallStatus.color)
                .frame(width: 4)
                .padding(.vertical, 6)
        }
        .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
        .onHover { hovering in
            isHovered = hovering
        }
    }
}

struct CardDisclosureStyle: DisclosureGroupStyle {
    func makeBody(configuration: Configuration) -> some View {
        VStack(alignment: .leading, spacing: 0) {
            Button {
                withAnimation(.easeInOut(duration: 0.2)) {
                    configuration.isExpanded.toggle()
                }
            } label: {
                configuration.label
            }
            .buttonStyle(.plain)

            if configuration.isExpanded {
                configuration.content
                    .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
    }
}
