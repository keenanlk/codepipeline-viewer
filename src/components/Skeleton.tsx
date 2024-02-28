import { usePipelines } from "../utils/PipelinesContext.tsx";

export default function Skeleton() {
  const { selectedPipelineNames } = usePipelines();
  return (
    <div className="animate-pulse">
      <div className="m-6 flex justify-between items-center">
        <h1 className=" font-bold text-slate-700 ">Pipelines</h1>
        <div className=" text-slate-700 py-2 px-4 rounded ">Add Pipeline</div>
      </div>

      {selectedPipelineNames?.map(() => (
        <div className="relative bg-slate-900 rounded-lg shadow-lg m-6 border border-blue-300 ">
          <div className="text-xs p-6">
            {/* Simulate PipelineHeader */}
            <div className="flex items-center justify-between">
              <div className="h-4 bg-slate-700 rounded w-1/4"></div>
              <div className="rounded-full bg-slate-700 h-6 w-6"></div>
            </div>

            {/* Simulate AccordionTrigger */}
            <div className="mt-4">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
