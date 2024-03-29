import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { PipelinesContextProvider } from "./utils/PipelinesContext.tsx";
import { NotificationsContextProvider } from "./utils/NotificationsContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NotificationsContextProvider>
          <PipelinesContextProvider>
            <App />
          </PipelinesContextProvider>
        </NotificationsContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
