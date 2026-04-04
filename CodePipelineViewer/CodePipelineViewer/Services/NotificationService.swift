import UserNotifications

final class NotificationService {
    static let shared = NotificationService()

    private init() {}

    func requestPermission() async {
        let center = UNUserNotificationCenter.current()
        try? await center.requestAuthorization(options: [.alert, .sound])
    }

    func sendPipelineSucceeded(name: String) {
        let content = UNMutableNotificationContent()
        content.title = "\(name) Finished!"
        content.body = "\(name) has finished deploying!"
        content.sound = .default

        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        UNUserNotificationCenter.current().add(request)
    }
}
