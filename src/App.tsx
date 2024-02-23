import { invoke } from "@tauri-apps/api/tauri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../@/components/ui/accordion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../@/components/ui/tooltip.tsx";

type PipelineResponse = {
  name: string;
  stages: StageInfo[];
};

type StageInfo = {
  name: string;
  actions: ActionInfo[];
};

type ActionInfo = {
  name: string;
  latest_execution: LatestExecutionInfo;
};

type LatestExecutionInfo = {
  action_execution_id?: string;
  status?: string;
  summary?: string;
  last_status_change?: string; // Depending on your date handling, you might want to use Date or string here
  token?: string;
  last_updated_by?: string;
  external_execution_id?: string;
  external_execution_url?: string;
  percent_complete?: number;
  error_details?: ErrorDetails;
};

type ErrorDetails = {
  code?: string;
  message?: string;
};
function App() {
  // const [pipelines, setPipelines] = useState<PipelineResponse>([]);
  async function getPipelines() {
    try {
      return testData;
      const retrievedPipelines: PipelineResponse[] =
        await invoke("list_pipelines");
      console.log(JSON.stringify(retrievedPipelines));
      debugger;
      return retrievedPipelines;
    } catch (error) {
      debugger;
      console.error(error);
    }
  }

  const queryClient = useQueryClient();

  const { data: pipelines } = useQuery({
    queryKey: ["pipelines"],
    queryFn: getPipelines,
    refetchInterval: 30000,
    refetchIntervalInBackground: false,
  });

  const getStageBorderColor = (stage: StageInfo): string => {
    const statuses = stage.actions.map((action) =>
      action.latest_execution && "status" in action.latest_execution
        ? action.latest_execution.status
        : "Unknown",
    );
    if (statuses.includes("Failed")) return "bg-red-500";
    if (statuses.every((status) => status === "Succeeded"))
      return "bg-green-500";
    if (statuses.includes("InProgress")) return "bg-yellow-500";
    return "bg-gray-500"; // Unknown or mixed statuses
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getPipelineStatusColor = (pipeline: PipelineResponse): string => {
    const hasInProgress = pipeline.stages.some((stage) =>
      stage.actions.some(
        (action) => action.latest_execution.status === "InProgress",
      ),
    );
    const hasFailed = pipeline.stages.some((stage) =>
      stage.actions.some(
        (action) => action.latest_execution.status === "Failed",
      ),
    );

    // If any action in progress, outline yellow
    if (hasInProgress) return "border-yellow-500";

    // If the last execution failed, outline red
    if (hasFailed) {
      const lastStage = pipeline.stages[pipeline.stages.length - 1];
      const lastAction = lastStage.actions[lastStage.actions.length - 1];
      if (lastAction.latest_execution.status === "Failed")
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

  const progrssBar = (pipeline: PipelineResponse) => {
    debugger;
    return (
      <div className="flex justify-between items-center w-full w-full">
        {pipeline.stages.map((stage, stageIndex) => (
          <div
            key={stageIndex}
            className={`flex ${stageIndex < pipeline.stages.length - 1 ? "flex-grow" : ""}`}
          >
            {/* Circle for Stage Status */}
            <div className="flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <div
                      className={`h-4 w-4 rounded-full ${getStageBorderColor(stage)} flex-shrink-0`}
                    ></div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span className="text-sm font-bold ml-2">{stage.name}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {stageIndex < pipeline.stages.length - 1 && (
              <div className="flex-grow mx-2 h-px bg-white self-center"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        {pipelines?.map((pipeline, i) => (
          <AccordionItem
            className={`bg-slate-900  p-6 rounded-lg shadow-lg space-y-4 m-6 border ${getPipelineStatusColor(pipeline)}`}
            value={i.toString()}
          >
            <AccordionTrigger className="w-full">
              <div className="flex flex-col w-full mr-10">
                <h1 className="text-xl font-bold mb-4 text-left">
                  {pipeline.name}
                </h1>
                {progrssBar(pipeline)}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {pipeline.stages.map((stage, stageIndex) => (
                <div key={stageIndex} className="mt-4">
                  <h3 className={`text-lg font-semibold mb-2`}>
                    Stage: {stage.name}
                  </h3>
                  {stage.actions.length > 0 ? (
                    stage.actions.map((action, actionIndex) => (
                      <div
                        key={actionIndex}
                        className="mb-3 p-2 bg-slate-700 rounded-md"
                      >
                        <h4 className="text-md font-bold">{action.name}</h4>
                        <p>
                          Status: {action.latest_execution.status || "Unknown"}
                        </p>
                        <p>
                          Summary: {action.latest_execution.summary || "N/A"}
                        </p>
                        <p>
                          Last Updated:{" "}
                          {action.latest_execution.last_status_change
                            ? formatDate(
                                action.latest_execution.last_status_change,
                              )
                            : "Unknown"}
                        </p>
                        {action.latest_execution.external_execution_url && (
                          <p>
                            Execution URL:{" "}
                            <a
                              href={
                                action.latest_execution.external_execution_url
                              }
                              className="text-blue-400 hover:text-blue-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link
                            </a>
                          </p>
                        )}
                        {action.latest_execution.error_details && (
                          <div>
                            <p>
                              Error Code:{" "}
                              {action.latest_execution.error_details.code}
                            </p>
                            <p>
                              Error Message:{" "}
                              {action.latest_execution.error_details.message}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">
                      No actions available for this stage.
                    </p>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
