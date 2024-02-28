import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { usePipelines } from "../utils/PipelinesContext.tsx";

export default function NoPipelines() {
  const { pipelineNameFromAws, addPipelineName } = usePipelines();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl m-6">Select a pipeline to get started</h1>
      <ScrollArea.Root className=" h-96 mx-2 border overflow-y-auto">
        {pipelineNameFromAws?.map((name) => (
          <div
            className="hover:bg-accent flex flex-col  cursor-pointer"
            onClick={async () => {
              addPipelineName(name);
            }}
          >
            <h4 className="p-4" key={name}>
              {name}
            </h4>
            <Separator className="h-0.5 bg-accent" />
          </div>
        ))}
      </ScrollArea.Root>
    </div>
  );
}
