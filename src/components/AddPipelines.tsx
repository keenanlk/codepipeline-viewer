import { Separator } from "@radix-ui/react-separator";
import { usePipelines } from "../utils/PipelinesContext.tsx";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./shad/Drawer.tsx";
import { ScrollArea } from "./shad/ScrollArea.tsx";

export default function AddPipeline() {
  const { availablePipelineNames, addPipelineName } = usePipelines();
  return (
    <Drawer>
      <DrawerTrigger>Add Pipeline</DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Pipelines</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-80 overflow-y-auto">
          {availablePipelineNames?.length ? (
            availablePipelineNames?.map((name) => (
              <DrawerClose>
                <div
                  key={name} // Ensure key is here
                  className="hover:bg-accent flex flex-col w-screen items-start cursor-pointer p-4"
                  onClick={() => addPipelineName(name)}
                >
                  <div>
                    <p className="text-xs">{name}</p>
                    <Separator className="h-0.5 bg-accent my-2" />
                  </div>
                </div>
              </DrawerClose>
            ))
          ) : (
            <div className="flex w-screen justify-center items-center p-4 text-gray-300">
              <p>No pipelines available</p>
            </div>
          )}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
