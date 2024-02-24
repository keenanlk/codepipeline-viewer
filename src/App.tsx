import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { getPipelines, getPipelineStatusColor } from "./utils/pipelines.ts";
import PipelineHeader from "./components/pipeline/PipelineHeader.tsx";
import PipelineStageInfo from "./components/pipeline/PipelineStageInfo.tsx";
import { Separator } from "@radix-ui/react-separator";

function App() {
  const { data: pipelines } = useQuery({
    queryKey: ["pipelines"],
    queryFn: getPipelines,
    refetchInterval: 30000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: "always",
  });

  return (
    <div>
      <Accordion type="single" collapsible>
        {pipelines?.map((pipeline, i) => (
          <AccordionItem
            className={`bg-slate-900  p-6 rounded-lg shadow-lg space-y-4 m-6 border ${getPipelineStatusColor(pipeline)}`}
            value={i.toString()}
          >
            <AccordionTrigger className="w-full text-xs">
              <PipelineHeader pipeline={pipeline} />
            </AccordionTrigger>
            <AccordionContent>
              {pipeline.stages.map((stage, stageIndex) => (
                <>
                  <PipelineStageInfo stage={stage} key={stageIndex} />
                  <Separator className="h-0.5 bg-accent" />
                </>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
