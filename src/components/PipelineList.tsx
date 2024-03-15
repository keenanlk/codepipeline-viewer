import {
  PipelineResponse,
  getPipelineStatusColor,
} from "../utils/pipelines.ts";
import PipelineHeader from "./pipeline/PipelineHeader.tsx";
import PipelineStageInfo from "./pipeline/PipelineStageInfo.tsx";
import { Separator } from "@radix-ui/react-separator";
import { usePipelines } from "../utils/PipelinesContext.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./shad/Accordion.tsx";

export default function PipelineList() {
  const { selectedPipelinesInfo, removePipelineName } = usePipelines();

  function getGithubCommit(pipeline: PipelineResponse) {
    const firstStage = pipeline.stages[0];
    const firstAction = firstStage.actions[0];
    try {
      const summary = JSON.parse(firstAction.latest_execution.summary || "");
      return summary?.CommitMessage || null;
    } catch {
      return null;
    }
  }

  return (
    <Accordion type="single" collapsible>
      {selectedPipelinesInfo?.map((pipeline, i) => (
        <AccordionItem
          className={`relative bg-slate-900  rounded-lg shadow-lg space-y-4 m-6 border ${getPipelineStatusColor(pipeline)}`}
          value={i.toString()}
        >
          <AccordionTrigger className="w-full text-xs p-6 ">
            <PipelineHeader pipeline={pipeline} />
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <div>
              {!!getGithubCommit(pipeline) && (
                <p className="text-gray-100 text-[12px]">
                  Latest Commit:{" "}
                  <span className="italic text-gray-200">
                    {getGithubCommit(pipeline)}
                  </span>
                </p>
              )}
              {pipeline.stages.map((stage, stageIndex) => (
                <>
                  <PipelineStageInfo stage={stage} key={stageIndex} />
                  <Separator className="h-1 bg-accent" />
                </>
              ))}
              <div className="flex justify-center items-center my-4">
                <button
                  onClick={async () => {
                    removePipelineName(pipeline.name);
                  }}
                >
                  Remove Pipeline
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
