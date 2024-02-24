import {
  getStageBackgroundColor,
  PipelineResponse,
} from "../../utils/pipelines.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../@/components/ui/tooltip.tsx";

export default function ProgressBar({
  pipeline,
}: {
  pipeline: PipelineResponse;
}) {
  return (
    <div className="flex justify-between items-center w-full">
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
                    className={`h-4 w-4 rounded-full ${getStageBackgroundColor(stage)} flex-shrink-0`}
                  ></div>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="font-bold ml-2">{stage.name}</span>
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
}
