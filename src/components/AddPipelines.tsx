import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { usePipelines } from "../utils/PipelinesContext.tsx";

export default function AddPipeline() {
  const { availablePipelineNames, addPipelineName } = usePipelines();
  return (
    <Dialog.Root>
      <Dialog.Trigger>Add Pipeline</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed bg-primary-foreground h-96 w-96 mb-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
          <div className="p-6">
            <Dialog.Title>Pipelines</Dialog.Title>
          </div>

          <ScrollArea.Root className="h-80 overflow-y-auto">
            <ScrollArea.Viewport>
              {availablePipelineNames?.map((name) => (
                <Dialog.Close>
                  <div
                    key={name} // Ensure key is here
                    className="hover:bg-accent flex flex-col items-start cursor-pointer p-4"
                    onClick={() => addPipelineName(name)}
                  >
                    <h4>{name}</h4>
                    <Separator className="h-0.5 bg-accent my-2" />
                  </div>
                </Dialog.Close>
              ))}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
          <Dialog.Close asChild>
            <button className="absolute top-0 right-0 m-2">Close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
