use tauri::command;
use aws_config::from_env;
use aws_sdk_codepipeline::{Client, error::SdkError};
use serde_json::{json, Value as JsonValue};
use aws_sdk_codepipeline::types::{ActionOwner, ActionCategory, StageDeclaration, ActionState};
use aws_sdk_codepipeline::operation::get_pipeline_state::GetPipelineStateOutput;


#[command]
async fn list_pipelines() -> Result<JsonValue, String> {
    let config = from_env().load().await;
    let client = Client::new(&config);

    let list_response = client.list_pipelines().send().await.map_err(|e| e.to_string())?;
    let mut pipelines_info = Vec::new();

    for pipeline in list_response.pipelines(){
        if let Some(name) = &pipeline.name {
            let pipeline_info = fetch_pipeline_details(&client, name).await?;
            pipelines_info.push(pipeline_info);
        }
    }

    Ok(json!(pipelines_info))
}

async fn fetch_pipeline_details(client: &Client, name: &str) -> Result<JsonValue, String> {
    let detail_response = client.get_pipeline().name(name).send().await.map_err(|e| e.to_string())?;
    let state_response = client.get_pipeline_state().name(name).send().await.map_err(|e| e.to_string())?;

    if let Some(pipeline_detail) = detail_response.pipeline() {
        let stages_info = pipeline_detail.stages.iter().map(|stage| {
            fetch_stage_details(stage, &state_response)
        }).collect::<Vec<_>>();

        Ok(json!({
            "name": name,
            "stages": stages_info,
        }))
    } else {
        println!("No details available for pipeline: {}", name);
        Ok(json!({}))
    }
}

fn fetch_stage_details(stage: &StageDeclaration, state_response: &GetPipelineStateOutput) -> JsonValue {
    let actions_info = state_response.stage_states().iter().find_map(|s| {
        if s.stage_name.as_deref() == Some(&stage.name) {
            // Assuming s.action_states is correctly a Vec<ActionState>, iterate over it directly
            Some(s.action_states().iter().map(|action_state| { // action_state is now correctly typed as &ActionState
                construct_latest_execution_info(action_state) // Correctly pass each &ActionState to the function
            }).collect::<Vec<_>>())
        } else {
            None
        }
    }).unwrap_or_else(Vec::new);

    json!({
        "name": stage.name,
        "actions": actions_info,
    })
}



fn construct_latest_execution_info(action_state: &ActionState) -> JsonValue {
    let latest_execution_info = action_state.latest_execution.as_ref().map(|exec| {
        json!({
            "action_execution_id": exec.action_execution_id,
            "status": exec.status.as_ref().map(|s| s.as_str()),
            "summary": exec.summary,
            "last_status_change": exec.last_status_change.map(|d| d.to_string()),
            "token": exec.token,
            "last_updated_by": exec.last_updated_by,
            "external_execution_id": exec.external_execution_id,
            "external_execution_url": exec.external_execution_url,
            "percent_complete": exec.percent_complete,
            "error_details": exec.error_details.as_ref().map(|ed| {
                json!({
                    "code": ed.code,
                    "message": ed.message,
                })
            }),
        })
    }).unwrap_or(json!({}));

    json!({
        "name": action_state.action_name,
        "latest_execution": latest_execution_info,
    })
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![list_pipelines])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
