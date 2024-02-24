import { getTextStatusColor, StageInfo } from "../../utils/pipelines.ts";
import { ExternalLinkIcon } from "lucide-react";

export default function PipelineStageInfo({ stage }: { stage: StageInfo }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="mt-4">
      <h3 className={` font-semibold mb-2`}>Stage: {stage.name}</h3>
      {stage.actions.length > 0 ? (
        stage.actions.map((action, actionIndex) => (
          <div key={actionIndex} className="mb-3 p-2 rounded-md">
            <h4
              className={`text-md font-bold flex items-center ${getTextStatusColor(action.latest_execution.status)}`}
            >
              {action.name}{" "}
              {action.latest_execution.external_execution_url && (
                <a
                  href={action.latest_execution.external_execution_url}
                  target="_blank"
                >
                  <ExternalLinkIcon className="pl-2" />
                </a>
              )}
            </h4>
            <p className="text-xs">
              {action.latest_execution.last_status_change
                ? formatDate(action.latest_execution.last_status_change)
                : "Unknown"}
            </p>
            {action.latest_execution.error_details && (
              <div>
                <p>Error Code: {action.latest_execution.error_details.code}</p>
                <p>
                  Error Message: {action.latest_execution.error_details.message}
                </p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-400">No actions available for this stage.</p>
      )}
    </div>
  );
}
