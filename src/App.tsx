import { usePipelines } from "./utils/PipelinesContext.tsx";
import Skeleton from "./components/Skeleton.tsx";
import NoPipelines from "./components/NoPipelines.tsx";
import AddPipeline from "./components/AddPipelines.tsx";
import PipelineList from "./components/PipelineList.tsx";

function App() {
  const { selectedPipelineNames, selectedPipelinesInfo, isRefetching } =
    usePipelines();

  if (isRefetching) {
    return <Skeleton />;
  }

  return (
    <div>
      {!selectedPipelineNames?.length && !selectedPipelinesInfo?.length && (
        <NoPipelines />
      )}
      {!!selectedPipelinesInfo?.length && (
        <div>
          <div className="m-6 flex justify-between">
            <h1>Pipelines</h1>
            <AddPipeline />
          </div>
          <PipelineList />
        </div>
      )}
    </div>
  );
}

export default App;
