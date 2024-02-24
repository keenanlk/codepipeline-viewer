import type { PipelineResponse } from "../../utils/pipelines.ts";
import ProgressBar from "./ProgressBar.tsx";

export default function PipelineHeader({
  pipeline,
}: {
  pipeline: PipelineResponse;
}) {
  return (
    <div className="flex flex-col w-full mr-10">
      <h1 className=" font-bold mb-4 text-left">{pipeline.name}</h1>
      <ProgressBar pipeline={pipeline} />
    </div>
  );
}
