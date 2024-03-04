import { PipelineResponse } from "./pipelines.ts";

export const testData: PipelineResponse[] = [
  {
    name: "pipeline-1",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "source",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #1 from Test',
              last_status_change: "2024-02-23T15:48:30.792999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123",
              external_execution_url: null,
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Build",
        actions: [
          {
            name: "Synth",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:52:06.482Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "CodePipelineBuildSynthCdk",
              external_execution_url: "https://console.aws.amazon.com",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "UpdatePipeline",
        actions: [
          {
            name: "SelfMutate",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:53:43.615999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },

      {
        name: "Deploy",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-23T15:58:47.016999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: "Stack accounts-next-production-App was updated.",
              last_status_change: "2024-02-23T16:00:52.686Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "pipeline-2",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "source",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #1 from Test',
              last_status_change: "2024-02-24T15:48:30.792999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123",
              external_execution_url: null,
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Build",
        actions: [
          {
            name: "Synth",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Failed",
              summary: null,
              last_status_change: "2024-02-24T15:52:06.482Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "CodePipelineBuildSynthCdk",
              external_execution_url: "https://console.aws.amazon.com",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "UpdatePipeline",
        actions: [
          {
            name: "SelfMutate",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:53:43.615999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },

      {
        name: "Deploy",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-23T15:58:47.016999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "123-2-3-4-5",
              status: "Succeeded",
              summary: "Stack accounts-next-production-App was updated.",
              last_status_change: "2024-02-23T16:00:52.686Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "123-2-3-4-5",
              external_execution_url: "https://console.aws.amazon.com/",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
];
