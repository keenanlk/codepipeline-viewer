import { createContext, useContext, useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getPipelineNamesFromAws,
  getPipelines,
  getPipelinesNames,
  PipelineResponse,
} from "./pipelines.ts";

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

export function PipelinesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
        (name) => !selectedPipelineNames?.includes(name),
      ),
    );
  }, [pipelineNameFromAws, selectedPipelineNames]);

  const {
    data: selectedPipelinesInfo,
    isRefetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["pipelines", selectedPipelineNames],
    queryFn: () => getPipelines(selectedPipelineNames),
    refetchInterval: 30000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: "always",
    placeholderData: keepPreviousData,
  });

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
