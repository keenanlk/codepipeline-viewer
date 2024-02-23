import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";

type Pipeline = {
  name: string;
  stages: {
    name: string;
    actions: {
      name: string;
      action_type_id: {
        category: string;
        owner: string;
        provider: string;
        version: string;
      };
    }[];
  }[];
};

function App() {
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  async function checkCredentials() {
    try {
      const retrievedPipelines: Pipeline[] = await invoke("list_pipelines");
      debugger;
      setPipelines(retrievedPipelines);
    } catch (error) {
      debugger;
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={checkCredentials}>Test</button>
      {pipelines.map((pipeline, i) => (
        <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold">{pipeline.name}</h2>
          <div>
            <h3 className="text-lg font-semibold">Stages:</h3>
            <ul className="list-disc list-inside">
              {pipeline.stages.map((stage, index) => (
                <li key={index} className="pl-2">
                  {stage.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
