import SwiftUI
import ServiceManagement

@main
struct CodePipelineViewerApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    init() {
        try? SMAppService.mainApp.register()
    }

    var body: some Scene {
        Settings {
            EmptyView()
        }
    }
}
