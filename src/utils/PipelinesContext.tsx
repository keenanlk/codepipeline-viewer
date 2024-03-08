import { createContext, useContext, useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getPipelineNamesFromAws,
  getPipelines,
  getPipelinesNames,
  PipelineResponse,
} from "./pipelines.ts";
import { useNotifications } from "./NotificationsContext.tsx";

type PipelinesContext = {
  selectedPipelineNames: string[] | null | undefined;
  selectedPipelinesInfo: PipelineResponse[] | null | undefined;
  pipelineNameFromAws: string[] | undefined;
  availablePipelineNames: string[] | undefined;
  addPipelineName: (name: string) => void;
  isRefetching: boolean;
  removePipelineName: (pipelineName: string) => void;
};

const PipelinesContext = createContext<PipelinesContext>({
  selectedPipelineNames: undefined,
  selectedPipelinesInfo: undefined,
  pipelineNameFromAws: undefined,
  availablePipelineNames: undefined,
  isRefetching: true,
  addPipelineName: async () => undefined,
  removePipelineName: async () => undefined,
});

function useIsWindowFocused() {
  const [isFocused, setIsFocused] = useState(document.hasFocus());

  useEffect(() => {
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return isFocused;
}

export function PipelinesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const notifications = useNotifications();
  const [availablePipelineNames, setAvailablePipelineNames] =
    useState<string[]>();

  const [selectedPipelineNames, setSelectedPipelineNames] =
    useState(getPipelinesNames());

  const { data: pipelineNameFromAws } = useQuery({
    queryKey: ["pipelineNames"],
    queryFn: getPipelineNamesFromAws,
  });

  useEffect(() => {
    // remove names from slectedpipeline names
    setAvailablePipelineNames(
      pipelineNameFromAws?.filter(
        (name) => !selectedPipelineNames?.includes(name)
      )
    );
  }, [pipelineNameFromAws, selectedPipelineNames]);

  const isWindowFocused = useIsWindowFocused();

  const refetchInterval = isWindowFocused ? 30000 : 60000;

  const {
    data: selectedPipelinesInfo,
    isRefetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["pipelines", selectedPipelineNames],
    queryFn: () => getPipelines(selectedPipelineNames),
    refetchInterval,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: "always",
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    selectedPipelinesInfo?.forEach((pipeline) => {
      const lastStage = pipeline.stages.pop();
      const lastAction = lastStage?.actions.pop();
      const updatedDate = new Date(
        String(lastAction?.latest_execution.last_status_change)
      );
      const now = new Date();

      if (
        lastAction?.latest_execution.status === "Succeeded" &&
        now.getTime() - updatedDate.getTime() < 60 * 1000
      ) {
        notifications.send(pipeline.name);
      }
    });
  }, [JSON.stringify(selectedPipelinesInfo)]);

  async function addPipelineName(name: string) {
    setSelectedPipelineNames((currentNames) => {
      const updatedNames = currentNames ? [...currentNames] : [];
      if (!updatedNames.includes(name)) {
        updatedNames.push(name);
        localStorage.setItem("pipelines", JSON.stringify(updatedNames));
        return updatedNames; // Return new array to ensure state update
      }
      return currentNames; // Return unchanged state if name is already included
    });
  }

  async function removePipelineName(pipelineName: string) {
    setSelectedPipelineNames((currentNames) => {
      if (!currentNames) return currentNames;
      const updatedNames = currentNames.filter((n) => n !== pipelineName);
      localStorage.setItem("pipelines", JSON.stringify(updatedNames));
      return updatedNames; // Always return a new array to ensure state update
    });
  }

  return (
    <PipelinesContext.Provider
      value={{
        selectedPipelineNames,
        selectedPipelinesInfo,
        availablePipelineNames,
        pipelineNameFromAws,
        addPipelineName,
        removePipelineName,
        isRefetching: isRefetching && isPlaceholderData,
      }}
    >
      {children}
    </PipelinesContext.Provider>
  );
}

export function usePipelines() {
  return useContext(PipelinesContext);
}
