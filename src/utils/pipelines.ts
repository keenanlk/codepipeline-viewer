import { invoke } from "@tauri-apps/api/tauri";

export type PipelineResponse = {
  name: string;
  stages: StageInfo[];
};

export type StageInfo = {
  name: string;
  actions: ActionInfo[];
};

export type ActionInfo = {
  name: string;
  latest_execution: LatestExecutionInfo;
};

export type LatestExecutionInfo = {
  action_execution_id?: string;
  status?: string;
  summary?: string | null;
  last_status_change?: string; // Depending on your date handling, you might want to use Date or string here
  token?: string | null;
  last_updated_by?: string | null;
  external_execution_id?: string;
  external_execution_url?: string | null;
  percent_complete?: number | null;
  error_details?: ErrorDetails | null;
};

export type ErrorDetails = {
  code?: string;
  message?: string;
};

export const getPipelineStatusColor = (pipeline: PipelineResponse): string => {
  const hasInProgress = pipeline.stages.some((stage) =>
    stage.actions.some(
      (action) => action.latest_execution.status === "InProgress",
    ),
  );
  const hasFailed = pipeline.stages.some((stage) =>
    stage.actions.some((action) => action.latest_execution.status === "Failed"),
  );

  // If any action in progress, outline yellow
  if (hasInProgress) return "border-yellow-500";

  // If any stage failed and none in progress, outline red
  if (hasFailed && !hasInProgress) {
    return "border-red-500";
  }

  // If all stages passed, outline green
  const allPassed = pipeline.stages.every((stage) =>
    stage.actions.every(
      (action) => action.latest_execution.status === "Succeeded",
    ),
  );
  if (allPassed) return "border-green-500";

  // Default outline color
  return "border-gray-500";
};

export const getStageBackgroundColor = (stage: StageInfo): string => {
  const statuses = stage.actions.map((action) =>
    action.latest_execution && "status" in action.latest_execution
      ? action.latest_execution.status
      : "Unknown",
  );
  if (statuses.includes("Failed")) return "bg-red-500";
  if (statuses.every((status) => status === "Succeeded")) return "bg-green-500";
  if (statuses.includes("InProgress")) return "bg-yellow-500";
  return "bg-gray-500"; // Unknown or mixed statuses
};

export const getTextStatusColor = (status?: string) => {
  switch (status) {
    case "Failed": {
      return "text-red-500";
    }
    case "Succeeded": {
      return "text-green-500";
    }
    case "InProgress": {
      return "text-yellow-500";
    }
    default: {
      return "text-gray-500";
    }
  }
};

export async function getPipelines(names: string[] | null | undefined) {
  try {
    console.log("getpipelines", names);
    if (!names) return null;
    // return testData;
    debugger;
    const retrievedPipelines: PipelineResponse[] = await invoke(
      "list_pipelines",
      { names },
    );

    return retrievedPipelines;
  } catch (error) {
    console.error(error);
  }
}

export async function getPipelineNamesFromAws() {
  try {
    const names: string[] = await invoke("get_pipeline_names");
    return names.sort();
  } catch (error) {
    console.error(error);
  }
}

export function addPipelineName(name: string) {
  let names = getPipelinesNames();

  if (!names) {
    names = [name];
  } else if (!names.includes(name)) {
    names.push(name);
  }

  localStorage.setItem("pipelines", JSON.stringify(names));
}

export function removePipeline(pipelineName: string) {
  let names = getPipelinesNames();

  if (!names) return;

  if (names.includes(pipelineName)) {
    names = names.filter((n) => n !== pipelineName);
  }

  localStorage.setItem("pipelines", JSON.stringify(names));
}

export function getPipelinesNames() {
  const data = localStorage.getItem("pipelines");

  if (!data) return null;

  try {
    const pipelines: string[] = JSON.parse(data);
    return pipelines;
  } catch {
    localStorage.removeItem("pipelines");
    return null;
  }
}
