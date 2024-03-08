import { createContext, useContext, useEffect } from "react";
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

const NotificationsContext = createContext<{
  send: (pipelineName: string) => void;
}>({
  send: async () => undefined,
});

export function NotificationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  async function checkApproval() {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
  }

  useEffect(() => {
    checkApproval();
  }, []);

  function send(pipelineName: string) {
    sendNotification({
      title: `${pipelineName} Finished!`,
      body: `${pipelineName} has finished deploying!`,
    });
  }
  return (
    <NotificationsContext.Provider value={{ send }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationsContext);
}
