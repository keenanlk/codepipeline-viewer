import { Separator } from "@radix-ui/react-separator";
import { usePipelines } from "../utils/PipelinesContext.tsx";
import { ScrollArea } from "./shad/ScrollArea.tsx";

export default function NoPipelines() {
  const { pipelineNameFromAws, addPipelineName } = usePipelines();
  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <h1 className="text-2xl m-6 flex-none">
        Select a pipeline to get started
      </h1>
      <ScrollArea className="flex-1 mx-2 border mb-6 overflow-auto">
        {pipelineNameFromAws?.map((name) => (
          <div
            className="hover:bg-accent flex flex-col cursor-pointer"
            onClick={async () => {
              addPipelineName(name);
            }}
          >
            <h4 className="p-4 text-xs" key={name}>
              {name}
            </h4>
            <Separator className="h-0.5 bg-accent" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
