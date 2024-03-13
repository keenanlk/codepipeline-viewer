use tauri::command;
use aws_sdk_codepipeline::Client;
use serde_json::{json, Value as JsonValue};
use aws_sdk_codepipeline::types::{StageDeclaration, ActionState};
use aws_sdk_codepipeline::operation::get_pipeline_state::GetPipelineStateOutput;
use std::collections::HashSet;
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem};
use tauri_plugin_positioner::{Position, WindowExt};
use auto_launch::AutoLaunch;

#[command]
async fn get_pipeline_names() -> Result<Vec<String>, String> {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    let client = Client::new(&config);

    let list_response = client.list_pipelines().send().await.map_err(|e| e.to_string())?;

    // Map over the pipelines to extract just the names, filtering out any None values
    let pipeline_names: Vec<String> = list_response.pipelines() // Use an empty slice if None to safely handle missing pipelines
        .iter()
        .filter_map(|pipeline| pipeline.name.clone()) // Clone the name if it exists
        .collect();

    Ok(pipeline_names)
}

#[command]
async fn list_pipelines(names: Vec<String>) -> Result<serde_json::Value, String> {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    let client = Client::new(&config);

    let list_response = client.list_pipelines().send().await.map_err(|e| e.to_string())?;

    // Convert the names Vec to a HashSet for efficient lookup
    let names_set: HashSet<String> = names.into_iter().collect();

    let mut pipelines_info = Vec::new();

    // Directly iterate over the Option<&[PipelineSummary]> with iter() and flatten()
    for pipeline in list_response.pipelines.iter().flatten() {
        if let Some(name) = &pipeline.name {
            // Check if the pipeline name is in the provided list of names
            if names_set.contains(name) {
                match fetch_pipeline_details(&client, name).await {
                    Ok(pipeline_info) => pipelines_info.push(pipeline_info),
                    Err(e) => return Err(e),
                }
            }
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

fn configure_autostart() {
    let app_name = "Codepipeline Viewer";
    let app_path = "/Applications/Codepipeline Viewer.app";
    let auto = AutoLaunch::new(app_name, app_path, false, &[] as &[&str]);

    // enable the auto launch
    auto.enable().is_ok();
    auto.is_enabled().unwrap();
}

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit").accelerator("Cmd+Q");
    let report_an_issue = CustomMenuItem::new("reportAnIssue".to_string(), "Report an Issue");
    let system_tray_menu = SystemTrayMenu::new().add_item(report_an_issue).add_native_item(SystemTrayMenuItem::Separator).add_item(quit);

    configure_autostart();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![list_pipelines, get_pipeline_names])
        .setup(|app| Ok(app.set_activation_policy(tauri::ActivationPolicy::Accessory)))
                .plugin(tauri_plugin_positioner::init())
                .system_tray(SystemTray::new().with_menu(system_tray_menu))
                .on_system_tray_event(|app, event| {
                    tauri_plugin_positioner::on_tray_event(app, &event);
                    match event {
                        SystemTrayEvent::LeftClick {
                            position: _,
                            size: _,
                            ..
                        } => {
                            let window = app.get_window("main").unwrap();
                            let _ = window.move_window(Position::TrayCenter);

                            if window.is_visible().unwrap() {
                                window.hide().unwrap();
                            } else {
                                window.show().unwrap();
                                window.set_focus().unwrap();
                            }
                        }
                        SystemTrayEvent::RightClick {
                            position: _,
                            size: _,
                            ..
                        } => {
                            println!("system tray received a right click");
                        }
                        SystemTrayEvent::DoubleClick {
                            position: _,
                            size: _,
                            ..
                        } => {
                            println!("system tray received a double click");
                        }
                        SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                            "reportAnIssue" => {
                               let url = "https://github.com/keenanlk/epocher-v2/issues/new?assignees=&labels=user%20reported%20bug&projects=&template=bug_report.md&title=";

                                   match webbrowser::open(url) {
                                       Ok(_) => println!("Opened {} successfully.", url),
                                       Err(e) => println!("Failed to open {}. Error: {}", url, e),
                                   }
                            }
                            "quit" => {
                                std::process::exit(0);
                            }
                            "hide" => {
                                let window = app.get_window("main").unwrap();
                                window.hide().unwrap();
                            }
                            _ => {}
                        },
                        _ => {}
                    }
                })
                .on_window_event(|event| match event.event() {
                    tauri::WindowEvent::Focused(is_focused) => {
                        // detect click outside of the focused window and hide the app
                        if !is_focused {
                            event.window().hide().unwrap();
                        }
                    }
                    _ => {}
                })
                .run(tauri::generate_context!())
                .expect("error while running tauri application");

}
