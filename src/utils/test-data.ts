import { PipelineResponse } from "./pipelines.ts";

export const testData: PipelineResponse[] = [
  {
    name: "accounts-next-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_accounts-next",
            latest_execution: {
              action_execution_id: "92253f24-41e5-45f5-9e9c-df171cbc8151",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #859 from CoSchedule/dependabot/npm_and_yarn/cdk/types/node-20.11.20\\n\\nchore(deps-dev): bump @types/node from 20.11.19 to 20.11.20 in /cdk"}',
              last_status_change: "2024-02-23T15:48:30.792999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "1290b4459f5eee07140e9e080e7e93b7b3b525a3",
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
              action_execution_id: "08423498-e73a-46f7-a626-5fd250e833a5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:52:06.482Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-QlVOByyJkJLx:7cb56b34-0138-46a2-850c-97eac5dfe456",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-QlVOByyJkJLx:7cb56b34-0138-46a2-850c-97eac5dfe456/view/new",
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
              action_execution_id: "2e67676c-c38a-485f-a3f2-35babf494ea7",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:53:43.615999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "accounts-next-production-pipeline-codepipeline-selfupdate:652a704e-a24d-488b-bdde-85b5fee15fdc",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/accounts-next-production-pipeline-codepipeline-selfupdate:652a704e-a24d-488b-bdde-85b5fee15fdc/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "958959a9-98e3-44a1-ad43-b152d9600c52",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:19.161999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ZvcF3bOqQlUY:e310791d-49d3-4b65-a9bc-2103789ec565",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ZvcF3bOqQlUY:e310791d-49d3-4b65-a9bc-2103789ec565/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "017f13c6-330f-4494-9d2a-543f8fbdd84f",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:18.081Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-Ms5Opt1ctiW7:1b1b2b69-4ce0-45f2-981e-52f4d8ad1876",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-Ms5Opt1ctiW7:1b1b2b69-4ce0-45f2-981e-52f4d8ad1876/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "78bfc84e-d743-4531-b238-8ec0d40b2d2b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:21.288Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-5XJBKgLdMIS9:d72fa097-f626-4ab4-9001-12074a72191f",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-5XJBKgLdMIS9:d72fa097-f626-4ab4-9001-12074a72191f/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "8027a6d6-2e82-482e-9e21-3d10d031b729",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:19.321Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-OmGKbgX8NWgS:f45e7287-b201-4e68-90cb-7eaad3b6ab3c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-OmGKbgX8NWgS:f45e7287-b201-4e68-90cb-7eaad3b6ab3c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "2eb9b446-9725-44a1-9070-9d713cd0eabd",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:18.780999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-q1Dt3cmXSz1b:9ca7884f-336f-4222-808c-ff0fed8aa717",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-q1Dt3cmXSz1b:9ca7884f-336f-4222-808c-ff0fed8aa717/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "04b7c54b-b0cb-4a6c-8845-cc2a4a88a92d",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:30.273Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-5A677UscdLK9:ce3cac12-3827-408b-99af-2574e1946444",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-5A677UscdLK9:ce3cac12-3827-408b-99af-2574e1946444/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "fcde67f0-dd74-4eb5-909d-b9200ed50929",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:29.680999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-oBX7BiaMhi6C:646a61a1-f475-4f98-bae9-6c9e8374d17c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-oBX7BiaMhi6C:646a61a1-f475-4f98-bae9-6c9e8374d17c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "ddf3d3f7-3ebd-48c1-8c7c-b2b84601b8fe",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:22.619999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-gQk9oxLqTncj:1df12b82-34b4-41ee-a862-dda11b2cce88",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-gQk9oxLqTncj:1df12b82-34b4-41ee-a862-dda11b2cce88/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "528d1dfc-24d6-4dbf-a6ff-3eb18b7558ff",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:54:23.128999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ACoI45MpRju4:76120daa-e122-410c-89c1-18a5d6ce0d5e",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ACoI45MpRju4:76120daa-e122-410c-89c1-18a5d6ce0d5e/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "accounts-next-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "bc4a7996-a9b9-4195-9026-de9a56cf5f80",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-23T15:58:47.016999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/5b32ee35-1550-4ddd-bf2d-c8abf8e048f8&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-production-App/9c4d8610-c818-11ed-87e6-0a3ed959374f",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/5b32ee35-1550-4ddd-bf2d-c8abf8e048f8&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-production-App/9c4d8610-c818-11ed-87e6-0a3ed959374f",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "e58014db-78bb-4a38-9a41-113da0f7d72d",
              status: "Succeeded",
              summary: "Stack accounts-next-production-App was updated.",
              last_status_change: "2024-02-23T16:00:52.686Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-production-App/9c4d8610-c818-11ed-87e6-0a3ed959374f",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-production-App/9c4d8610-c818-11ed-87e6-0a3ed959374f",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "accounts-next-staging-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_accounts-next",
            latest_execution: {
              action_execution_id: "a1827165-2849-4117-83d6-e2ff23b2fa42",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'max-users\' into staging"}',
              last_status_change: "2024-02-21T17:31:55.319999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "12466d5662dde30e1206b4267168c3648eb87ee8",
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
              action_execution_id: "ed109adb-1496-4ccc-a749-0c952a6a209b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:34:17.724999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-jNwuoJN5K0Gu:7e59e9e2-f351-4752-864a-288d0dbddef2",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-jNwuoJN5K0Gu:7e59e9e2-f351-4752-864a-288d0dbddef2/view/new",
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
              action_execution_id: "c7477bf1-6dad-47b2-b9b7-4870a938c561",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:09.022Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "accounts-next-staging-pipeline-codepipeline-selfupdate:fd60d28d-4b68-47a4-a80b-c0209fa9233c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/accounts-next-staging-pipeline-codepipeline-selfupdate:fd60d28d-4b68-47a4-a80b-c0209fa9233c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "ddb1e9d6-d681-4696-99fa-d9f438ac9c44",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:54.974999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-qRKzFFy7RXsu:a697c000-eecf-4291-b46e-73c4eb329243",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-qRKzFFy7RXsu:a697c000-eecf-4291-b46e-73c4eb329243/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "62c70755-c32c-4f40-bd0d-4945658d3f44",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:50.868Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-NStShumRAIjG:fefe08c7-c0f1-4f51-99ed-9e6dfc4f000b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-NStShumRAIjG:fefe08c7-c0f1-4f51-99ed-9e6dfc4f000b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "5c17f86a-4bab-4716-b8d0-e266436d1a20",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:55.480999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-sJIYXvOXbZgo:a1383aac-8c04-4dca-b829-2e18f8fc8db1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-sJIYXvOXbZgo:a1383aac-8c04-4dca-b829-2e18f8fc8db1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "65840da6-5ea5-4423-af25-0bc576d88c0b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:52.144999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-Xkr2D1tR6AvR:49491402-d0ba-4c33-922e-e5fcd8d99af7",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-Xkr2D1tR6AvR:49491402-d0ba-4c33-922e-e5fcd8d99af7/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "85ab0613-9f7f-4828-9ca6-38595161f99c",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:37:14.68Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-xl1F7q0qylWI:5e4516c9-24b9-4080-92d6-400bbc4ed32f",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-xl1F7q0qylWI:5e4516c9-24b9-4080-92d6-400bbc4ed32f/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "9ef57125-ca17-4411-822a-6288b1f3aa7f",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:49.898Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-eE9r9lktDCoA:61212d4d-81f3-4fbb-81d3-aa113ac03ad0",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-eE9r9lktDCoA:61212d4d-81f3-4fbb-81d3-aa113ac03ad0/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "64d70107-0635-4168-8f2e-f7679f538acf",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:36:56.819999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-KU2zRo0KMgL8:7ec685ab-6a6e-405e-977c-bbd1e9be3d03",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-KU2zRo0KMgL8:7ec685ab-6a6e-405e-977c-bbd1e9be3d03/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "e037955a-64b0-4e95-bd18-2f37c2ff1a07",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:37:03.878999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-CCGQCMjwgPw4:bf26cbf6-218e-4a8a-994e-9d7231eac0a7",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-CCGQCMjwgPw4:bf26cbf6-218e-4a8a-994e-9d7231eac0a7/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "578a3c24-06cd-4350-b9af-793d4f816387",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-21T17:37:09.345Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-CVZ6lBQyb9Gy:abb93ceb-871e-42a1-af2a-b3dba762d5b2",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-CVZ6lBQyb9Gy:abb93ceb-871e-42a1-af2a-b3dba762d5b2/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "accounts-next-staging",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "de75406d-5c3b-4fcb-ae00-9ffe57332bed",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-21T17:38:24.592Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/8bec2efe-a246-44b5-923d-afc8adc267aa&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-staging-App/ea3ba560-b9da-11ed-bf0c-0a86447211f3",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/8bec2efe-a246-44b5-923d-afc8adc267aa&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-staging-App/ea3ba560-b9da-11ed-bf0c-0a86447211f3",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "ba58cb36-574c-48c5-b90a-7bbb4db67331",
              status: "Succeeded",
              summary: "Stack accounts-next-staging-App was updated.",
              last_status_change: "2024-02-21T17:41:04.082Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-staging-App/ea3ba560-b9da-11ed-bf0c-0a86447211f3",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/accounts-next-staging-App/ea3ba560-b9da-11ed-bf0c-0a86447211f3",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "coschedule-app-beta-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule",
            latest_execution: {
              action_execution_id: "afa56fad-71af-490d-b34c-30f4c37437c2",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'production\' into beta"}',
              last_status_change: "2023-12-28T16:08:15.875999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "25735aed683985ac3184961af3c1f5120a200ff5",
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
              action_execution_id: "6d097cba-b453-4abb-a586-89bf1f106804",
              status: "Failed",
              summary: null,
              last_status_change: "2023-12-28T16:17:18.198999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-WzcHQY7tHnmh:ee26af6f-a81f-403a-913f-de89e4628052",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-WzcHQY7tHnmh:ee26af6f-a81f-403a-913f-de89e4628052/view/new",
              percent_complete: null,
              error_details: {
                code: "JobFailed",
                message: "Build terminated with state: FAILED",
              },
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
              action_execution_id: "b23185fb-98a6-42a6-94f6-9681fc6820f3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:42:45.864Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "coschedule-app-beta-pipeline-codepipeline-selfupdate:1d1d522a-8584-472f-8745-fa766403f2bf",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/coschedule-app-beta-pipeline-codepipeline-selfupdate:1d1d522a-8584-472f-8745-fa766403f2bf/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "ce0244da-7cd3-42f7-8c9b-23dd29387c49",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:45:03.063999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-fdh3qrjyNj0y:5457e05d-fa3d-45b6-93c4-9b8478e8e2c0",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-fdh3qrjyNj0y:5457e05d-fa3d-45b6-93c4-9b8478e8e2c0/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "c710b839-e99d-4000-923f-1305f0ba22b1",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:50.424Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-yvcLybLkyScJ:39ce5564-ee19-49c8-9a81-184f0606e6a8",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-yvcLybLkyScJ:39ce5564-ee19-49c8-9a81-184f0606e6a8/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "a6306347-854e-45f5-b600-48151340cc0b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:50.121999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-H9gZ2CdEEgTy:95c943db-ce60-4063-a9aa-27dd5ee7dc69",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-H9gZ2CdEEgTy:95c943db-ce60-4063-a9aa-27dd5ee7dc69/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset12",
            latest_execution: {
              action_execution_id: "1217f1c7-1f73-4fc4-897b-b560f69da648",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:45:11.976Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-UKfsSA6zfKI5:3aa1feda-586f-41c2-9b99-92e10b56eb7e",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-UKfsSA6zfKI5:3aa1feda-586f-41c2-9b99-92e10b56eb7e/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset13",
            latest_execution: {
              action_execution_id: "ba230784-84cd-4d2f-8aaf-b93626ece31b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:56.204999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-VFQ9Y9ZpLwWf:43eb82ab-9507-48d3-9306-6ee927fadd74",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-VFQ9Y9ZpLwWf:43eb82ab-9507-48d3-9306-6ee927fadd74/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset14",
            latest_execution: {
              action_execution_id: "4034d125-e3b8-45d6-8aec-a3b7aeecb0a6",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:45:26.788Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-dbChnw25IOOf:c4c2a72b-fbd5-4d38-b3cc-acd8c02c6514",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-dbChnw25IOOf:c4c2a72b-fbd5-4d38-b3cc-acd8c02c6514/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset15",
            latest_execution: {
              action_execution_id: "17a86247-bc4f-4d79-a519-1fa30f01df4b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:24.494999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-FFiZH35kYNBv:cdb85411-7a16-4186-b148-8adc8da0a877",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-FFiZH35kYNBv:cdb85411-7a16-4186-b148-8adc8da0a877/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "f8e97ad8-87e7-4205-8c06-41654ea8922c",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:52.884Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-FlVgGcIg0zRJ:cd01f287-2249-4fa4-9dd7-fadc35a549e1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-FlVgGcIg0zRJ:cd01f287-2249-4fa4-9dd7-fadc35a549e1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "6c7e8a69-87a2-4890-a342-77587ee26801",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:49.253Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-T2chCtaDauzm:66b38bc5-edc7-4d20-9199-e2c1400637e8",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-T2chCtaDauzm:66b38bc5-edc7-4d20-9199-e2c1400637e8/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "9a5a4057-1a16-4676-b3f7-6337924ef7eb",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:54.720999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-cw7v4bpJk3x6:7fa589a8-83b8-4106-a78e-c655f1600d42",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-cw7v4bpJk3x6:7fa589a8-83b8-4106-a78e-c655f1600d42/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "3945545a-91bc-4f84-8503-27440fb5689a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:57.796Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-X5riCslFbjjK:8d6a314c-104b-4b4d-bda3-60ea1319a662",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-X5riCslFbjjK:8d6a314c-104b-4b4d-bda3-60ea1319a662/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "ac8192fa-ebc8-433d-8683-32c89ca48c06",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:22.404999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-TtwZAXk2jB6Q:969bc495-2561-4e39-b548-202c4f5936cc",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-TtwZAXk2jB6Q:969bc495-2561-4e39-b548-202c4f5936cc/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "e8bc42ee-0683-4c34-8ef4-bb17a243cae8",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:45:32.288Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-zMPXIAXBR4Mv:7ceca926-909b-4343-9d00-d0323d06cfe1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-zMPXIAXBR4Mv:7ceca926-909b-4343-9d00-d0323d06cfe1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "650df34d-3f6b-4ff1-b9af-79db3b48d913",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:45:09.279Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-GIUuBxNUL4Pw:515b3839-7558-4f60-88d3-e2010117bbe1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-GIUuBxNUL4Pw:515b3839-7558-4f60-88d3-e2010117bbe1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "54803098-6a80-4d0f-860a-7ad9facd9c4a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:44:49.585999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-lhSxHsUecXHs:0fac04be-1936-485c-b96b-b5131b663bea",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-lhSxHsUecXHs:0fac04be-1936-485c-b96b-b5131b663bea/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "BeforeStageDeploy",
        actions: [
          {
            name: "StripAssetsFromAssembly",
            latest_execution: {
              action_execution_id: "e01ca3d9-fac7-400b-ba02-9f684f28446e",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-03T15:46:55.184999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBeforeStageDepl-zJSPbFgfqK2P:89f1314e-d4a1-4bc1-a817-f30ed5c9d0e1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBeforeStageDepl-zJSPbFgfqK2P:89f1314e-d4a1-4bc1-a817-f30ed5c9d0e1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "coschedule-app-beta",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "e3b8986f-5c01-4072-9ec6-8fbcf55c19d3",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2023-10-03T15:48:03.085999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/a744350e-1041-48e5-a449-76ab8858e691&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-beta-App/ba2d84f0-807f-11ec-80ee-0e53a5478883",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/a744350e-1041-48e5-a449-76ab8858e691&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-beta-App/ba2d84f0-807f-11ec-80ee-0e53a5478883",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "93a87930-dd42-4557-9277-7c87e2978c00",
              status: "Succeeded",
              summary: "Stack coschedule-app-beta-App was updated.",
              last_status_change: "2023-10-03T16:00:41.519999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-beta-App/ba2d84f0-807f-11ec-80ee-0e53a5478883",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-beta-App/ba2d84f0-807f-11ec-80ee-0e53a5478883",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "coschedule-app-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule",
            latest_execution: {
              action_execution_id: "b4047e8c-0c4c-4378-9814-8d37616aac0c",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #17067 from CoSchedule/ss/conditionally-disable-new-projects\\n\\nchore: conditionally disable adding new projects"}',
              last_status_change: "2024-02-23T20:52:43.822Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "5e5f95f0cac02ef124cc5c16f37dc8ac321df47d",
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
              action_execution_id: "f62a07d9-9101-4806-bcc5-7c7c7f7b69c3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:02:40.315999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-XiIjROJPXKym:59fc9f93-5438-4338-8c22-27ffaa1a8e8e",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-XiIjROJPXKym:59fc9f93-5438-4338-8c22-27ffaa1a8e8e/view/new",
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
              action_execution_id: "74b12d3d-bea5-464f-a87e-99025dada405",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:04:58.766999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "coschedule-app-production-pipeline-codepipeline-selfupdate:06dbd4fa-ec85-40f6-b864-8a7a173b689d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/coschedule-app-production-pipeline-codepipeline-selfupdate:06dbd4fa-ec85-40f6-b864-8a7a173b689d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "afe7aa6b-59ab-42c8-be83-865788e390f8",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:17.134999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-PHJYZRpQog44:a9c1df08-444a-4899-8339-1e6221cbae57",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-PHJYZRpQog44:a9c1df08-444a-4899-8339-1e6221cbae57/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "6900a165-d5e8-44d9-aa70-72f7dc3b7a51",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:12.918999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-T3D2slGJWRE8:271b034d-f837-4ad2-b7e6-d90b42f9896a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-T3D2slGJWRE8:271b034d-f837-4ad2-b7e6-d90b42f9896a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "133e6d69-f939-43fb-845f-9d745c6ed9b3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:46.621999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-PLZaE06E3RGd:bed11dcd-596a-4f94-9f1c-624e9396b91b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-PLZaE06E3RGd:bed11dcd-596a-4f94-9f1c-624e9396b91b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset12",
            latest_execution: {
              action_execution_id: "b6b26005-21a9-48e0-8ad1-fd46a7f684da",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:44Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-xCiDv4jtaMNz:7b336dde-4958-4f43-8bc5-95adb4301976",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-xCiDv4jtaMNz:7b336dde-4958-4f43-8bc5-95adb4301976/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset13",
            latest_execution: {
              action_execution_id: "7fdec2ba-c31a-4498-b7ee-7c2c64a7c2c9",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:42.186Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-GCp13JMT4Pvv:c29b76ed-098a-44ae-a0fa-9e551a4e9b1a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-GCp13JMT4Pvv:c29b76ed-098a-44ae-a0fa-9e551a4e9b1a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset14",
            latest_execution: {
              action_execution_id: "8976e48f-cdcb-4311-a1e8-84264fadd1a0",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:45.045Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-t2dfGqjfcKJ8:c0585207-f0be-4752-8745-91af6544df4a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-t2dfGqjfcKJ8:c0585207-f0be-4752-8745-91af6544df4a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset15",
            latest_execution: {
              action_execution_id: "ae19440b-e2f5-49b7-a1b6-c0e00eddf99d",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:19.625999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-mfeY3fcTBd7M:c5882f5d-bf78-4ded-a481-1007c04f8e73",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-mfeY3fcTBd7M:c5882f5d-bf78-4ded-a481-1007c04f8e73/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset16",
            latest_execution: {
              action_execution_id: "46239945-77f5-43b7-8e95-6d6b3134801a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:12.157999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-zn3PkzJ80yBd:6c3497cc-6313-44ba-9d16-ea17a3fe2250",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-zn3PkzJ80yBd:6c3497cc-6313-44ba-9d16-ea17a3fe2250/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset17",
            latest_execution: {
              action_execution_id: "f5cc5cfd-3394-40bb-9910-a1924c040c57",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:15.940999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-jxaEAZes3HNd:e81372f5-201e-4416-917d-4d863cc0a504",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-jxaEAZes3HNd:e81372f5-201e-4416-917d-4d863cc0a504/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset18",
            latest_execution: {
              action_execution_id: "652414fb-d9a4-48e3-9e31-838d14178687",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:24.164Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-GkapiST1edJH:58ee3128-b191-43ca-a33c-0cad79c26af1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-GkapiST1edJH:58ee3128-b191-43ca-a33c-0cad79c26af1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "822d8fe5-79f0-42af-8154-f66fff843236",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:44.914Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-09JSn7qVsp3l:77c8b198-6d22-4766-ab4e-63b0078ace21",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-09JSn7qVsp3l:77c8b198-6d22-4766-ab4e-63b0078ace21/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "71ee93f8-f8c5-45c1-b6fd-7f925b373ce5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:15.137Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-IIysmG2fanGc:04327c6e-2604-4b3d-8cd3-e400aba136bc",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-IIysmG2fanGc:04327c6e-2604-4b3d-8cd3-e400aba136bc/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "a217b5bb-8d38-4ded-b644-78f64bd69192",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:52.108999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-bPmeHudTj2SB:60e01b73-e27a-40c8-aa42-35247ee836b8",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-bPmeHudTj2SB:60e01b73-e27a-40c8-aa42-35247ee836b8/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "7307c468-28a6-4df2-a77a-df12b44c0614",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:49.289Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-zP5PeGBJtDMq:8d17f1f3-8d55-4fcd-9bdf-ea15b34ad88f",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-zP5PeGBJtDMq:8d17f1f3-8d55-4fcd-9bdf-ea15b34ad88f/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "ee9c197c-1d19-497e-ad0a-d0610f017e45",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:51.157Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-R1cn41v5j8cx:805695e1-072a-4d48-a8c0-59dfa5d0eb44",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-R1cn41v5j8cx:805695e1-072a-4d48-a8c0-59dfa5d0eb44/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "a2ea4895-f1f1-497f-8f2d-b13dd9514948",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:41.809999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ueSlpx7nWK3q:99325a57-a40d-4d45-b3d7-656126eec572",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ueSlpx7nWK3q:99325a57-a40d-4d45-b3d7-656126eec572/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "e22e2782-c857-4079-971f-0fbeca178f12",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:43.872999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-f3L9gBIfBXt5:24e5c8e2-ce19-4b4d-bec6-84edfbc2f11f",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-f3L9gBIfBXt5:24e5c8e2-ce19-4b4d-bec6-84edfbc2f11f/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "80667693-e5c0-45a3-997b-5f359a6b1190",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:06:29.503999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-63TJx2KAMInm:ab7aca6a-8c61-4dd5-83d5-714a013a8dcf",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-63TJx2KAMInm:ab7aca6a-8c61-4dd5-83d5-714a013a8dcf/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "BeforeStageDeploy",
        actions: [
          {
            name: "StripAssetsFromAssembly",
            latest_execution: {
              action_execution_id: "950167b8-d5da-4fe4-8bff-60442618e321",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:07:59.332Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBeforeStageDepl-H75o35zU63iv:dbc8ebf3-6f29-41e9-9980-5cd26839b93a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBeforeStageDepl-H75o35zU63iv:dbc8ebf3-6f29-41e9-9980-5cd26839b93a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "coschedule-app-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "6d615273-5796-4b8f-b8a6-e54bbf37428f",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-23T21:09:07.415999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/9f070927-8e95-4953-ba80-9e0db00245a6&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-production-App/18301220-8eae-11ec-b0d1-0e317dc75567",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/9f070927-8e95-4953-ba80-9e0db00245a6&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-production-App/18301220-8eae-11ec-b0d1-0e317dc75567",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "2176bfdd-834d-4a13-a7bf-01aaace65b6e",
              status: "Succeeded",
              summary: "Stack coschedule-app-production-App was updated.",
              last_status_change: "2024-02-23T21:21:37.895999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-production-App/18301220-8eae-11ec-b0d1-0e317dc75567",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-production-App/18301220-8eae-11ec-b0d1-0e317dc75567",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "coschedule-app-staging-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule",
            latest_execution: {
              action_execution_id: "4fccad99-098f-47b1-81d2-0d63f35f8e8a",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'ss/fb-errors-draft\' into staging\\n\\n# Conflicts:\\n#\\tnext/package-lock.json\\n#\\tnext/package.json"}',
              last_status_change: "2024-02-20T19:10:38.438999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "8487c31665b22df1c322a95ab337963239230028",
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
              action_execution_id: "aaaced52-4b79-4c34-bc02-e9f53723f733",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:20:56.355Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-ImI5M2rJuCxI:c09a1973-de1a-402e-a232-3adf4c7e59d3",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-ImI5M2rJuCxI:c09a1973-de1a-402e-a232-3adf4c7e59d3/view/new",
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
              action_execution_id: "85ee1994-9d18-4116-a7ea-8d733ea12ec8",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:23:27.648999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "coschedule-app-staging-pipeline-codepipeline-selfupdate:a1e035c2-99b0-4592-8be6-173122b20cd8",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/coschedule-app-staging-pipeline-codepipeline-selfupdate:a1e035c2-99b0-4592-8be6-173122b20cd8/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "dafcd5f2-8e04-4ffd-939b-ed0686a3985c",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:24:49.176Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-vAEY8xfbGL3o:35424d6e-a696-45ff-ac90-45c4a235739e",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-vAEY8xfbGL3o:35424d6e-a696-45ff-ac90-45c4a235739e/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "81cb7e6e-32d6-4fb9-8f6e-323f5c2731da",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:22.079999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-AeXobdnyXPfU:0f782390-6710-4a38-a947-9a8bc487165d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-AeXobdnyXPfU:0f782390-6710-4a38-a947-9a8bc487165d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "e2338fe8-4dd4-4f2e-9d23-b53d881eda5a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:22.322999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-u6p868MIp0km:7ad052e5-044d-44ae-b3d6-427fb51475ad",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-u6p868MIp0km:7ad052e5-044d-44ae-b3d6-427fb51475ad/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset12",
            latest_execution: {
              action_execution_id: "aaf897b5-8d6b-4ef8-90b4-1253349003d3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:13.931999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-SvUan6oFqJ1S:0f3229f1-8544-4a90-ad86-cb7720cc5a51",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-SvUan6oFqJ1S:0f3229f1-8544-4a90-ad86-cb7720cc5a51/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset13",
            latest_execution: {
              action_execution_id: "1641c725-e37e-47b9-a2ab-880c3f919fc8",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:08.108Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-mu2fLjEzBgzz:14d529fe-fab7-4c71-974c-e8db68b9ac2d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-mu2fLjEzBgzz:14d529fe-fab7-4c71-974c-e8db68b9ac2d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset14",
            latest_execution: {
              action_execution_id: "21c66ebf-66a6-4324-bb42-3bb325a2994c",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:12.601999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-WOrS9b1Le3Ab:e2ff2eef-67c9-48e7-a7d6-66c460f9820d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-WOrS9b1Le3Ab:e2ff2eef-67c9-48e7-a7d6-66c460f9820d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset15",
            latest_execution: {
              action_execution_id: "0fee62f2-922e-4220-a5d0-fe26234f2da4",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:24:49.999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-PU28tn8VNaaP:360f72ed-0c0d-436f-b0db-80969ca6c5e9",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-PU28tn8VNaaP:360f72ed-0c0d-436f-b0db-80969ca6c5e9/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset16",
            latest_execution: {
              action_execution_id: "0099ac4d-ef5c-4ebe-b977-0fe7740dcd47",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:14.223Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-XBBCq4M3Lnke:c7d29bd8-b259-4a21-9721-43dc7dab69e3",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-XBBCq4M3Lnke:c7d29bd8-b259-4a21-9721-43dc7dab69e3/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset17",
            latest_execution: {
              action_execution_id: "ae2de147-d926-454f-b60e-576b08a2c752",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:24:41.898Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-jXRu3oQqAbMK:679142a8-5d2a-4c7e-b74f-9420f4ebe509",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-jXRu3oQqAbMK:679142a8-5d2a-4c7e-b74f-9420f4ebe509/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset18",
            latest_execution: {
              action_execution_id: "e4f39132-6ad9-4f75-84e6-d01487876064",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:13.798Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-7x2j5uOWBDPa:7a74eff2-6047-43bc-a302-c59bfb99bce5",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-7x2j5uOWBDPa:7a74eff2-6047-43bc-a302-c59bfb99bce5/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset19",
            latest_execution: {
              action_execution_id: "0c3f8969-d2d2-4a64-9cf3-3520727886a9",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:14.345999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-PPNRMujJ9xKO:b51da8b9-d987-48ae-9c6b-cb840f2b1c70",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-PPNRMujJ9xKO:b51da8b9-d987-48ae-9c6b-cb840f2b1c70/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "df4f6002-83b4-46a1-a557-8d07ed52265a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:12.012Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-p2nBt4iNwDMV:5da06864-2e9e-4570-b1f8-32df038eec05",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-p2nBt4iNwDMV:5da06864-2e9e-4570-b1f8-32df038eec05/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset20",
            latest_execution: {
              action_execution_id: "3727763b-2678-4bf7-b54f-4bddb3a308bb",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:24.914999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-2DrhZPJyFLQZ:b5b88b56-5c71-49e1-9013-4e433dff917d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-2DrhZPJyFLQZ:b5b88b56-5c71-49e1-9013-4e433dff917d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset21",
            latest_execution: {
              action_execution_id: "cfa88300-885f-4b6d-9ec9-8494fd3a7d8e",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:21.296999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-2i9ZWt8DHM1T:2ad042e8-d5f3-4816-b414-9e23d86f5b32",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-2i9ZWt8DHM1T:2ad042e8-d5f3-4816-b414-9e23d86f5b32/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "cf2e37a3-bb51-4ab2-a8e8-430315a5fcc4",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:10.628Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-9krf9lu7bW16:32710350-9630-49e0-8cda-b9a4a3c9b6e8",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-9krf9lu7bW16:32710350-9630-49e0-8cda-b9a4a3c9b6e8/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "22234cc2-cb3c-45b1-9a29-781bfc062f17",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:12.990999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-kqoRbOD1hkJE:606ab380-ddf1-4402-af32-414780faa9db",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-kqoRbOD1hkJE:606ab380-ddf1-4402-af32-414780faa9db/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "4af6991b-090d-48f2-a162-aebda5c25a72",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:15.296Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-mvzJx56IU7cp:33a95337-8aaa-489e-8d67-1c1fbd4bc5cf",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-mvzJx56IU7cp:33a95337-8aaa-489e-8d67-1c1fbd4bc5cf/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "6ff7efd5-24eb-4d88-811c-3c2c62ca20e1",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:17.549999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-AX5CQ3J3Nnv8:6667de0c-1010-45d9-9ef2-e42b7b04f975",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-AX5CQ3J3Nnv8:6667de0c-1010-45d9-9ef2-e42b7b04f975/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "15147fd0-d6ce-46c5-a111-25593d4c5c37",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:23.904Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-fqjSitViji9J:e7c33152-8bb5-44be-8760-9bcaaeff58bf",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-fqjSitViji9J:e7c33152-8bb5-44be-8760-9bcaaeff58bf/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "7cd10ee1-4b32-49d0-a890-934158e581d1",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:24:49.358Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-aODtVFQ9hFRN:f6bed9a8-553b-43fc-b58f-65f623fe7eea",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-aODtVFQ9hFRN:f6bed9a8-553b-43fc-b58f-65f623fe7eea/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "5daa5241-8c17-44be-b8c9-d11091ff92cc",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:25:24.15Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-Cb7ItcGtmQoI:32b4bf18-b777-4ae5-8167-5aa848f06334",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-Cb7ItcGtmQoI:32b4bf18-b777-4ae5-8167-5aa848f06334/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "BeforeStageDeploy",
        actions: [
          {
            name: "StripAssetsFromAssembly",
            latest_execution: {
              action_execution_id: "d7302f69-99a5-4e57-bee1-45945fd017c3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-20T19:26:33.992Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBeforeStageDepl-Ymd76khjE639:5e01de60-bdab-432f-bb6a-720c571cbbbe",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBeforeStageDepl-Ymd76khjE639:5e01de60-bdab-432f-bb6a-720c571cbbbe/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "coschedule-app-staging",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "d1a93b23-328f-42d7-ac79-f75fa6d90eb7",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-20T19:27:41.525Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/634f347c-5ecc-4c7f-94a1-078f3b9ec05e&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-staging-App/42a53cd0-b1f2-11ec-a1c9-129d75033097",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/634f347c-5ecc-4c7f-94a1-078f3b9ec05e&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-staging-App/42a53cd0-b1f2-11ec-a1c9-129d75033097",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "3eda4118-707b-412d-8c46-01a5bb78ce3f",
              status: "Succeeded",
              summary: "Stack coschedule-app-staging-App was updated.",
              last_status_change: "2024-02-20T19:40:13.082999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-staging-App/42a53cd0-b1f2-11ec-a1c9-129d75033097",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/coschedule-app-staging-App/42a53cd0-b1f2-11ec-a1c9-129d75033097",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "crm-production-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "7bfa68f8-0164-420f-9427-dadb8b133a94",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #599 from CoSchedule/dependabot/npm_and_yarn/types/node-20.11.20\\n\\nchore(deps-dev): bump @types/node from 20.11.19 to 20.11.20"}',
              last_status_change: "2024-02-23T15:53:18.482Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "332ad76af6087ea586d3fedaffab7d1333526565",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "3b30db0b-a335-43a7-9b3f-0313f7b9ab72",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:58:02.017999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "crm:50e3a286-6469-4b87-962a-40575d9e73aa",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/crm:50e3a286-6469-4b87-962a-40575d9e73aa/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "crm-staging-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "4389bbf5-4d44-42cd-ad8d-970f4ab791eb",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'infra/add-optional-delay-seconds\' into staging"}',
              last_status_change: "2024-01-25T17:18:37.947Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "fbae2c2a3299f5da21ac3abb5590cce71b65e506",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "0415566d-9442-453e-bf25-8167eea7c28d",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-01-25T17:22:51.64Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "crm:e29bd4d5-382b-440e-95bb-974409d661f0",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/crm:e29bd4d5-382b-440e-95bb-974409d661f0/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "funnel-position-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule-funnel-position",
            latest_execution: {
              action_execution_id: "859ca553-0ea7-49f7-9171-e4c56598f45c",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #495 from CoSchedule/dependabot/npm_and_yarn/types/node-20.11.20\\n\\nchore(deps-dev): bump @types/node from 20.11.19 to 20.11.20"}',
              last_status_change: "2024-02-23T15:57:23.793999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "40e6dec6528cbeacc62ab12a14a57ab350a0426d",
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
              action_execution_id: "6d36831d-7951-470c-9fd3-6229d20f7073",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:59:46.267999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-97C11pX3p0iX:0e48d39d-d71c-4b5b-8dc4-c273915f77b4",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-97C11pX3p0iX:0e48d39d-d71c-4b5b-8dc4-c273915f77b4/view/new",
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
              action_execution_id: "364e3aea-979d-448c-a293-21ef9634ac01",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T16:00:50.756Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "funnel-position-production-pipeline-codepipeline-selfupdate:571a94e4-0351-4331-a39a-e2cc7b6e8934",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/funnel-position-production-pipeline-codepipeline-selfupdate:571a94e4-0351-4331-a39a-e2cc7b6e8934/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "34bdc985-89d0-4897-923d-165fc2b00bf0",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T16:02:00.542999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-0rux4ZjpSW3F:5ffbaf4c-ba11-42b5-b932-a2f7ef12d365",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-0rux4ZjpSW3F:5ffbaf4c-ba11-42b5-b932-a2f7ef12d365/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "funnel-position-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "77167287-d49f-48e9-9ef4-b5f8f765db9d",
              status: "Succeeded",
              summary: "Change set PipelineChange was created with no changes.",
              last_status_change: "2024-02-23T16:03:09.012Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/efafbe87-10be-404d-b138-ea0db21934e3&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/funnel-position-production-App/c6d20b60-316b-11ee-9028-128db97f43ed",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/efafbe87-10be-404d-b138-ea0db21934e3&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/funnel-position-production-App/c6d20b60-316b-11ee-9028-128db97f43ed",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "090da308-0216-4eb3-916f-3893c7d9b9c3",
              status: "Succeeded",
              summary: "Change set PipelineChange was executed with no change.",
              last_status_change: "2024-02-23T16:03:10.569999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/funnel-position-production-App/c6d20b60-316b-11ee-9028-128db97f43ed",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/funnel-position-production-App/c6d20b60-316b-11ee-9028-128db97f43ed",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "headline-analyzer-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_headline-analyzer",
            latest_execution: {
              action_execution_id: "14c70d64-e9ac-4c6c-b751-4cb3306045d2",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #19 from CoSchedule/ss/update-for-new-networks\\n\\nchore: update Keats for tiktok, youtube, and mastodon"}',
              last_status_change: "2023-12-05T16:57:19.559Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "df73398b7edb88f3387661bb449c8b5166aa03d4",
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
              action_execution_id: "3754f0c8-7a5d-4d08-bdad-91dd959a5422",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-05T16:59:20.907999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-JSh7sAJ8r37k:2236320e-d413-46b8-b1c2-b349bfb85723",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-JSh7sAJ8r37k:2236320e-d413-46b8-b1c2-b349bfb85723/view/new",
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
              action_execution_id: "e1c7a1bf-273d-4e68-8b70-c198d9dab613",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-05T17:01:29.68Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "headline-analyzer-production-pipeline-codepipeline-selfupdate:6d486de3-7a0d-4896-af64-430d629873ed",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/headline-analyzer-production-pipeline-codepipeline-selfupdate:6d486de3-7a0d-4896-af64-430d629873ed/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "85fe6ba9-0dde-4fef-af12-479ca4490136",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-05T17:03:02.927Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-TvRdvJ4AKlyE:8827c5ed-591b-46c3-a2a8-8d195e711712",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-TvRdvJ4AKlyE:8827c5ed-591b-46c3-a2a8-8d195e711712/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "headline-analyzer-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "59420f27-a8bd-417d-905d-43c144bf3482",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2023-12-05T17:03:43.954999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/39bdb765-f28d-41df-8900-cb09af8dadc4&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/headline-analyzer-production-App/77e3ea00-79b9-11ee-9c21-127eb7e4c9cd",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/39bdb765-f28d-41df-8900-cb09af8dadc4&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/headline-analyzer-production-App/77e3ea00-79b9-11ee-9c21-127eb7e4c9cd",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "d832d777-b9c6-4dbe-8887-632ea5f08c56",
              status: "Succeeded",
              summary: "Stack headline-analyzer-production-App was updated.",
              last_status_change: "2023-12-05T17:04:18.000999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/headline-analyzer-production-App/77e3ea00-79b9-11ee-9c21-127eb7e4c9cd",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/headline-analyzer-production-App/77e3ea00-79b9-11ee-9c21-127eb7e4c9cd",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "hiremia-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_hire-mia",
            latest_execution: {
              action_execution_id: "2ee9f495-40df-4d40-848a-e9549d043d2d",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #630 from CoSchedule/lav-more-fav-dashboard\\n\\nfix: :bug: fix dashboard fav and recent section"}',
              last_status_change: "2024-02-24T00:32:17.914Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "412234da530c29607c68430c72cb593a38cf5f5b",
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
              action_execution_id: "e4515fb1-0185-4483-92bc-234b78791d31",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:35:25.838999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-UqCKqmlpPN65:c5e2826e-ffb1-4747-a7ee-3bee74402749",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-UqCKqmlpPN65:c5e2826e-ffb1-4747-a7ee-3bee74402749/view/new",
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
              action_execution_id: "9f42a5ab-57c0-4c26-a7d9-cec771b3f272",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:37:01.628Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "hiremia-production-pipeline-codepipeline-selfupdate:f07e7a1f-1ca4-43f7-9131-e8b179d3057a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/hiremia-production-pipeline-codepipeline-selfupdate:f07e7a1f-1ca4-43f7-9131-e8b179d3057a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "849ffeed-ee25-49c2-9e99-d3f0582d35db",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.18Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-9REWRLYGGWGu:47b5e24c-9935-4777-ac03-b2d04f3b731b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-9REWRLYGGWGu:47b5e24c-9935-4777-ac03-b2d04f3b731b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "765306f0-56b1-4be0-9868-e2fe0e2a578f",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.447Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-N4du8tefIg5B:5703cf0f-214b-4b12-83d6-6ee9bd6b2e84",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-N4du8tefIg5B:5703cf0f-214b-4b12-83d6-6ee9bd6b2e84/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "a7de0b6c-32d4-4e56-bf79-08323a9ca44e",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.039999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ZNVUBwq85jkC:25315023-978d-4820-bc92-c4311b5b0fff",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ZNVUBwq85jkC:25315023-978d-4820-bc92-c4311b5b0fff/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset12",
            latest_execution: {
              action_execution_id: "3a3b1145-9961-4771-bdec-cc3f8d37313a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:08.724999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-8QMGximYU1Hd:dce1ab4e-b05d-4b8a-b653-6daf19a355a1",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-8QMGximYU1Hd:dce1ab4e-b05d-4b8a-b653-6daf19a355a1/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "6db033cf-85a5-4fb9-b1ec-92801d5ccd29",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.309999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-x8DmPqRbv7FM:86020831-3a3a-483b-886f-56e98e1ebc71",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-x8DmPqRbv7FM:86020831-3a3a-483b-886f-56e98e1ebc71/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "bc3ccd1e-b003-4c7c-b4c3-3add0748a45b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:07.288Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-J96Pyne7MgW2:1b039a39-8ba2-4a6a-9438-8c5352afba0f",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-J96Pyne7MgW2:1b039a39-8ba2-4a6a-9438-8c5352afba0f/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "28f42802-5521-4f17-bcd9-f69f1fa49124",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:08.911999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-vnAneOVbboWs:8eda5f58-2a35-4d68-9de7-776f9ec73078",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-vnAneOVbboWs:8eda5f58-2a35-4d68-9de7-776f9ec73078/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "f6abaa7b-f6de-4f54-8bb2-3e7e06f7e127",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.789999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-op1OSz0Xc4pZ:27b1b853-8393-4538-b0ac-558e1d2577b7",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-op1OSz0Xc4pZ:27b1b853-8393-4538-b0ac-558e1d2577b7/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "12f60659-158c-43fd-b2bd-fb23a77664aa",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:09.592Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-a4eBDjtIK2rn:e82c3be0-d3f3-4a49-b68e-2f0cb9eaaa1d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-a4eBDjtIK2rn:e82c3be0-d3f3-4a49-b68e-2f0cb9eaaa1d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "f92889af-078f-4c5b-8f60-35ac76d043e4",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:10.325Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-Sw6DY4rTJ2Ag:43eb0e49-0dbb-4026-a3e6-2aafafcd582b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-Sw6DY4rTJ2Ag:43eb0e49-0dbb-4026-a3e6-2aafafcd582b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "a40a39ea-9fad-4260-ac85-b3e6a9bbdb50",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:10.151Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-VQNf4tmvktsR:0342b90e-52f1-4b7c-808d-38bbe052935b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-VQNf4tmvktsR:0342b90e-52f1-4b7c-808d-38bbe052935b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "bba4a8a4-601a-4ca5-ab7a-2a41936fa432",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:12.819999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-jqJjbx9FVmnd:59470bc1-cf86-40ca-b97f-1d8b62685bd0",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-jqJjbx9FVmnd:59470bc1-cf86-40ca-b97f-1d8b62685bd0/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "BeforeStageDeploy",
        actions: [
          {
            name: "StripAssetsFromAssembly",
            latest_execution: {
              action_execution_id: "c79e6eba-a83c-497c-b3ad-913db589b6ea",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-24T00:38:45.875999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBeforeStageDepl-gs9N3WfzlhyZ:acf036dd-58b2-4131-b770-eb1ab0cb88d4",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBeforeStageDepl-gs9N3WfzlhyZ:acf036dd-58b2-4131-b770-eb1ab0cb88d4/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "hiremia-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "a2b45d5a-3f00-426a-8b9d-c97131ae3946",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-24T00:39:52.361999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/5b9494c1-b0a8-4c92-85c9-f12f966360ae&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-production-App/62af9fe0-bee1-11ee-8d8c-12eb47108057",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/5b9494c1-b0a8-4c92-85c9-f12f966360ae&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-production-App/62af9fe0-bee1-11ee-8d8c-12eb47108057",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "44e3069e-3c99-4b67-92de-7d8f8f585c9f",
              status: "Succeeded",
              summary: "Stack hiremia-production-App was updated.",
              last_status_change: "2024-02-24T00:41:28.243999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-production-App/62af9fe0-bee1-11ee-8d8c-12eb47108057",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-production-App/62af9fe0-bee1-11ee-8d8c-12eb47108057",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "hiremia-staging-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_hire-mia",
            latest_execution: {
              action_execution_id: "79441cf3-599e-431e-beca-3b2354a9d978",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'jml-module-fixes\' into staging"}',
              last_status_change: "2024-02-23T21:35:34.200999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "7ac14cb7b468900c713085ae5d68c0e9690248fa",
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
              action_execution_id: "6ce0fb7f-eef6-4e63-98b2-ab4233d429c4",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:38:50.191999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-6J5Rh3tbi83q:b26a743e-204a-4e7d-8c1b-9c0cb567c01c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-6J5Rh3tbi83q:b26a743e-204a-4e7d-8c1b-9c0cb567c01c/view/new",
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
              action_execution_id: "cd3cb40c-058c-4baf-9b23-d0802a1a7fa7",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:40:29.5Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "hiremia-staging-pipeline-codepipeline-selfupdate:a80d7783-3dad-47cd-b757-e87ac578253b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/hiremia-staging-pipeline-codepipeline-selfupdate:a80d7783-3dad-47cd-b757-e87ac578253b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "d42d7510-a734-411e-8d93-e019408da2e1",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:35.710999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-da395eWxpRkZ:9cb0c56f-97b1-4f55-870f-006d1ca70df9",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-da395eWxpRkZ:9cb0c56f-97b1-4f55-870f-006d1ca70df9/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "c8deb625-b152-45e3-981b-d68a45830279",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:36.677Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-vm2UDHP9RU5i:b646515b-e573-43fb-adfb-a79a7f0e5ce9",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-vm2UDHP9RU5i:b646515b-e573-43fb-adfb-a79a7f0e5ce9/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "a8aaedcf-e64d-4a94-94b1-47e4da3caf28",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:10.154999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-oekp0qVgPBuy:7cfe5f5d-51bd-4dad-bec6-06f244197744",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-oekp0qVgPBuy:7cfe5f5d-51bd-4dad-bec6-06f244197744/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset12",
            latest_execution: {
              action_execution_id: "e8decba2-cdae-4df4-ae8f-4ed951981956",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:40.023999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-MYn9N1Oe9Y0i:1892b668-a5bc-43bd-880d-0317b20ac35b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-MYn9N1Oe9Y0i:1892b668-a5bc-43bd-880d-0317b20ac35b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "ca6bf474-22a3-4d1b-81d4-20d501e50d32",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:08.279Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-vEP6uT5RqDUE:70bb8a05-f8da-4c33-940f-39076ef6948b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-vEP6uT5RqDUE:70bb8a05-f8da-4c33-940f-39076ef6948b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "fee892e7-4230-4737-b463-a0b37a6794e7",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:37.229Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ZoXxVZbrihH9:98b792f8-2efb-48c7-b24e-e88186182448",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ZoXxVZbrihH9:98b792f8-2efb-48c7-b24e-e88186182448/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "0868c244-a388-43a8-9fa6-9771a15f63a1",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:10.013999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-0wDDSGvc2d02:93fe9225-f4a9-4ede-bacb-28451393db2c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-0wDDSGvc2d02:93fe9225-f4a9-4ede-bacb-28451393db2c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "947f6036-fa21-4630-b8ae-9c03d6bbc77e",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:10.671999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-6I7ftITn8uVn:eee8365f-c237-49d6-bd39-ede225bb3f29",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-6I7ftITn8uVn:eee8365f-c237-49d6-bd39-ede225bb3f29/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "e40dfa57-d952-4b31-ad8c-c096d8d42456",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:39.755Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-EcbqDEMFsQDG:fd94e59f-ceeb-484b-94ea-8872b7eb6d18",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-EcbqDEMFsQDG:fd94e59f-ceeb-484b-94ea-8872b7eb6d18/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "45b765b5-9a82-4aea-b214-8ef0dbb4f563",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:39.894Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-w32BknmGRBI5:e044e2a9-6ca7-4b24-a5ab-5ad4c6852914",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-w32BknmGRBI5:e044e2a9-6ca7-4b24-a5ab-5ad4c6852914/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "c4d635f0-55db-4c14-a1b1-1234f1cfe671",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:11.565999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-dzBmrbAyGf3L:333b1012-c5e3-4b28-ada3-9bc20eb748e4",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-dzBmrbAyGf3L:333b1012-c5e3-4b28-ada3-9bc20eb748e4/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "1539e58e-6425-4ea1-a6f0-71403781fb6e",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:41:11.443Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-7OxrGMDFiYEB:054f211f-aa71-4124-a13b-5283a64ee61d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-7OxrGMDFiYEB:054f211f-aa71-4124-a13b-5283a64ee61d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "BeforeStageDeploy",
        actions: [
          {
            name: "StripAssetsFromAssembly",
            latest_execution: {
              action_execution_id: "aeb9e722-9de5-4788-9f93-7679c8c0c862",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:42:17.545Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBeforeStageDepl-xzqftgxO0ZWR:ac49a28b-97ca-407a-ad29-38d245e4dc1b",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBeforeStageDepl-xzqftgxO0ZWR:ac49a28b-97ca-407a-ad29-38d245e4dc1b/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "hiremia-staging",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "bcfca407-69bb-4190-a54b-a500e3bc5255",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2024-02-23T21:43:24.591Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/618d6bc8-3cea-47b0-988b-246edbf266a3&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-staging-App/c2d15860-66d9-11ee-a6dc-0a0bc516420b",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/618d6bc8-3cea-47b0-988b-246edbf266a3&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-staging-App/c2d15860-66d9-11ee-a6dc-0a0bc516420b",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "cc93e47f-e2f8-473b-bd7b-6ebd19f32724",
              status: "Succeeded",
              summary: "Stack hiremia-staging-App was updated.",
              last_status_change: "2024-02-23T21:44:29.372999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-staging-App/c2d15860-66d9-11ee-a6dc-0a0bc516420b",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/hiremia-staging-App/c2d15860-66d9-11ee-a6dc-0a0bc516420b",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "lead-scoring-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_lead-scoring",
            latest_execution: {
              action_execution_id: "6c39d445-341b-453b-a67a-f684e99dd3e5",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #293 from CoSchedule/dependabot/npm_and_yarn/aws-cdk-lib-2.130.0\\n\\nchore(deps): bump aws-cdk-lib from 2.129.0 to 2.130.0"}',
              last_status_change: "2024-02-23T15:43:30.621Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "ec7893d2a64af82530c1cf0aa22a87a1862b35d7",
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
            name: "ShellStep",
            latest_execution: {
              action_execution_id: "24e07031-8945-45f3-8e5f-71d7185f4d5a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:44:47.269999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildShellStepC-PgoUQ00dJOcU:40fc6b04-ae3b-4a13-92a4-8c09a5c793fe",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildShellStepC-PgoUQ00dJOcU:40fc6b04-ae3b-4a13-92a4-8c09a5c793fe/view/new",
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
              action_execution_id: "61f57fd8-36e4-4096-9ce2-337817ff8928",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:45:21.306999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "lead-scoring-pipeline-codepipeline-selfupdate:6888a188-bb8e-4e07-843c-4169213bab8e",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/lead-scoring-pipeline-codepipeline-selfupdate:6888a188-bb8e-4e07-843c-4169213bab8e/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "fe277fcf-0a99-495d-aff8-65e2c003f8b5",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:46:05.012Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-q74JdVKGO9RZ:6be78051-d3ab-4b6d-90ce-23d38801c3d4",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-q74JdVKGO9RZ:6be78051-d3ab-4b6d-90ce-23d38801c3d4/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "05b7d3b1-6418-4e9b-b05a-1884f89e8b58",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T15:45:59.421Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-P5NFH4c79LtE:2c31762b-91f9-4951-8109-b17cb5f71dcf",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-P5NFH4c79LtE:2c31762b-91f9-4951-8109-b17cb5f71dcf/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "lead-scoring",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "1ff4c616-94c4-4cc2-a5f1-03708731fbc7",
              status: "Succeeded",
              summary: "Change set PipelineChange was created with no changes.",
              last_status_change: "2024-02-23T15:47:54.293999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/d2d259dd-d329-45e9-b0ca-ec34d09562bd&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/lead-scoring-lead-scoring/5b788460-8f60-11ec-8129-120701928f9d",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/d2d259dd-d329-45e9-b0ca-ec34d09562bd&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/lead-scoring-lead-scoring/5b788460-8f60-11ec-8129-120701928f9d",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "e7ffce07-2a28-44ad-9a69-a4ec9d2f4f01",
              status: "Succeeded",
              summary: "Change set PipelineChange was executed with no change.",
              last_status_change: "2024-02-23T15:47:56.121999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/lead-scoring-lead-scoring/5b788460-8f60-11ec-8129-120701928f9d",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/lead-scoring-lead-scoring/5b788460-8f60-11ec-8129-120701928f9d",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "media-gateway-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule-media-gateway",
            latest_execution: {
              action_execution_id: "4a9e11b6-069d-461f-a058-b0ecb159a846",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"chore(api): switch to regular function deployment"}',
              last_status_change: "2023-11-02T15:48:00.829999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "6937da9d16c9e01e4675e986d5c330aac6451b21",
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
              action_execution_id: "52e7e804-07df-4fed-bfc8-e6d3da28d671",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-11-02T15:49:54.078999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-aRFWSbGqurVa:799243ce-495a-4c0d-94ad-b8ed6b02fc71",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-aRFWSbGqurVa:799243ce-495a-4c0d-94ad-b8ed6b02fc71/view/new",
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
              action_execution_id: "947ae9a4-246e-471a-bd50-c6464d6416aa",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-11-02T15:52:17.769Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "media-gateway-production-pipeline-codepipeline-selfupdate:47763426-9762-4fa8-8bf1-87c3a6499027",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/media-gateway-production-pipeline-codepipeline-selfupdate:47763426-9762-4fa8-8bf1-87c3a6499027/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "9ffcbee2-549c-4139-a35a-00c2815ab294",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-11-02T15:53:41.226Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-dnCmQNK25YbF:e5b0e25d-3882-469a-8bd7-e24745fbcc20",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-dnCmQNK25YbF:e5b0e25d-3882-469a-8bd7-e24745fbcc20/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "media-gateway-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "0b405c99-fbc5-4275-b208-396bf9d8f293",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2023-11-02T15:54:15.637Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/019e3526-36d1-457f-84d6-c0e45bd6066b&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/media-gateway-production-App/d86f72c0-7993-11ee-9928-0a84449f4019",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/019e3526-36d1-457f-84d6-c0e45bd6066b&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/media-gateway-production-App/d86f72c0-7993-11ee-9928-0a84449f4019",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "1e46aa06-ec30-4b7f-933f-36d530b92c51",
              status: "Succeeded",
              summary: "Stack media-gateway-production-App was updated.",
              last_status_change: "2023-11-02T15:55:51.483999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/media-gateway-production-App/d86f72c0-7993-11ee-9928-0a84449f4019",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/media-gateway-production-App/d86f72c0-7993-11ee-9928-0a84449f4019",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "oauth-passthrough-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_coschedule-oauth-passthrough",
            latest_execution: {
              action_execution_id: "4363d0af-afbe-43c2-9895-ea36eb04be4e",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #8 from CoSchedule/infra/longer-timeout\\n\\nchore(api): longer timeout for lambda function"}',
              last_status_change: "2023-12-18T20:57:55.917999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "b064d9c610f1eb0bda19a07c4bc0a941dd885478",
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
              action_execution_id: "7e0fba73-65fd-4750-812e-56679e8f8b56",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-18T20:59:03.517999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-H7prRu6XzeEB:2df9ec65-4e79-4cdb-bd13-cac6731f5b81",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-H7prRu6XzeEB:2df9ec65-4e79-4cdb-bd13-cac6731f5b81/view/new",
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
              action_execution_id: "eb75b996-bc75-44a8-a2a1-3e9096b2afe4",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-18T21:00:09.930999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "oauth-passthrough-production-pipeline-codepipeline-selfupdate:ffdc41a0-2df2-46a0-b628-8405896f230a",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/oauth-passthrough-production-pipeline-codepipeline-selfupdate:ffdc41a0-2df2-46a0-b628-8405896f230a/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "46613b71-4069-49a3-988c-2d93a3bd4c49",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-12-18T21:00:44.141Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-ZAvPubkAWGoE:902dcf2b-c88d-4bbb-a3d0-5263c1d66a86",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-ZAvPubkAWGoE:902dcf2b-c88d-4bbb-a3d0-5263c1d66a86/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "oauth-passthrough-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "96483853-7a31-4701-9683-9b5df5bd41bf",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2023-12-18T21:01:23.147Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/e7443f91-5ae5-41aa-946c-d7b6ac1d7b03&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/oauth-passthrough-production-App/60947990-750a-11ee-93e5-12b287eedf6d",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/e7443f91-5ae5-41aa-946c-d7b6ac1d7b03&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/oauth-passthrough-production-App/60947990-750a-11ee-93e5-12b287eedf6d",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "45360ebe-d385-4846-bca9-a371f781fde3",
              status: "Succeeded",
              summary: "Stack oauth-passthrough-production-App was updated.",
              last_status_change: "2023-12-18T21:01:58.688999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/oauth-passthrough-production-App/60947990-750a-11ee-93e5-12b287eedf6d",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/oauth-passthrough-production-App/60947990-750a-11ee-93e5-12b287eedf6d",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "share-website-production-pipeline-codepipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "CoSchedule_share-website",
            latest_execution: {
              action_execution_id: "4af75b5f-bc4b-461d-a065-ff3e33c61f98",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"chore: remove secret loading"}',
              last_status_change: "2023-10-24T20:56:32.253999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "34f1df2b378262b6a020af105ece4d4e1a77d37d",
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
              action_execution_id: "3f13b53f-5cbb-4c20-bd46-932128c5230b",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T20:59:00.174Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineBuildSynthCdkBu-HcwH3yn2b48a:4373a4b3-c844-4046-bee2-b0393f70c061",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineBuildSynthCdkBu-HcwH3yn2b48a:4373a4b3-c844-4046-bee2-b0393f70c061/view/new",
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
              action_execution_id: "01bd22e3-572c-4307-b55f-c0f8bd9b8aac",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:01:00.176Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "share-website-production-pipeline-codepipeline-selfupdate:03af9b29-a183-48e8-b850-1fe81e1433c2",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/share-website-production-pipeline-codepipeline-selfupdate:03af9b29-a183-48e8-b850-1fe81e1433c2/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "Assets",
        actions: [
          {
            name: "FileAsset1",
            latest_execution: {
              action_execution_id: "81c792b3-3c92-499c-8150-5ec097080ac3",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:23.084Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-yrKTpCqJFbIo:43b0836c-6a61-4c6b-a490-afbe1c016cc0",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-yrKTpCqJFbIo:43b0836c-6a61-4c6b-a490-afbe1c016cc0/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset10",
            latest_execution: {
              action_execution_id: "785abf35-4b6f-48af-955b-2b180fe22bef",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:20.237999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-mg2vz9N0K5VC:cd47a8c9-a5fd-40a2-a56e-1e56c5bed7b9",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-mg2vz9N0K5VC:cd47a8c9-a5fd-40a2-a56e-1e56c5bed7b9/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset11",
            latest_execution: {
              action_execution_id: "93843a97-c9f3-4668-8ce0-bc071606aca9",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:40.262Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-VcwFPCpvByws:0e05bcad-2fce-4ba0-8c90-edfaf5c4be3c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-VcwFPCpvByws:0e05bcad-2fce-4ba0-8c90-edfaf5c4be3c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset2",
            latest_execution: {
              action_execution_id: "90b7c761-21e9-470f-ba46-4de54be994a8",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:19.562Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-2DCIueZ33PIK:cfa246c0-2180-4038-b182-138ff64b9545",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-2DCIueZ33PIK:cfa246c0-2180-4038-b182-138ff64b9545/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset3",
            latest_execution: {
              action_execution_id: "04b6d110-6fc5-4d36-bc85-b78d666b411a",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:22.720999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-fMHwKxQdvugy:edb13a39-8102-4426-ba87-65f6e22487cb",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-fMHwKxQdvugy:edb13a39-8102-4426-ba87-65f6e22487cb/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset4",
            latest_execution: {
              action_execution_id: "6ac3970d-231a-4265-b28f-e35c818c38bf",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:42.368Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-8FdPKXzhdNnL:640eae73-8337-4a24-bea4-4b3cdfbde605",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-8FdPKXzhdNnL:640eae73-8337-4a24-bea4-4b3cdfbde605/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset5",
            latest_execution: {
              action_execution_id: "32a0b079-5531-4228-9281-a34e6478a303",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:11.115Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-LPwxdS3OustG:8940f180-35dc-4de3-bdec-8c39a13ab1d7",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-LPwxdS3OustG:8940f180-35dc-4de3-bdec-8c39a13ab1d7/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset6",
            latest_execution: {
              action_execution_id: "11cbd18e-c0b8-4ee0-92e0-f746a4e6c7af",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:31.092999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-NP138os5rKMJ:99d5be57-775e-4bdf-9e21-283fe4883975",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-NP138os5rKMJ:99d5be57-775e-4bdf-9e21-283fe4883975/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset7",
            latest_execution: {
              action_execution_id: "14f433c7-9c9e-4479-8f60-4dd2fb74ab09",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:04:11.971999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-WRwr9ETPcDym:5f59dc67-0be7-47c2-a2f1-5cd20e0fd42c",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-WRwr9ETPcDym:5f59dc67-0be7-47c2-a2f1-5cd20e0fd42c/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset8",
            latest_execution: {
              action_execution_id: "3b358b09-4377-4189-bddf-6222dc8a97e2",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:40.151Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-8FvyASc1TWXW:091846c5-423b-4ed0-aafb-8a6ffbe008fd",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-8FvyASc1TWXW:091846c5-423b-4ed0-aafb-8a6ffbe008fd/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "FileAsset9",
            latest_execution: {
              action_execution_id: "e8262fe7-f04a-4bad-a4c5-a88964189b33",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-10-24T21:02:26.369999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "CodePipelineAssetsFileAsset-OEasLdBqaDUb:eb47f289-0bd9-4030-a8e7-c31fb3948994",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/CodePipelineAssetsFileAsset-OEasLdBqaDUb:eb47f289-0bd9-4030-a8e7-c31fb3948994/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
      {
        name: "share-website-production",
        actions: [
          {
            name: "Prepare",
            latest_execution: {
              action_execution_id: "c393da31-fa2d-4aff-ae48-8ceefbf303d6",
              status: "Succeeded",
              summary: "Change set PipelineChange was created.",
              last_status_change: "2023-10-24T21:04:47.444999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/711c24ff-b934-414a-a700-00366e89908b&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/share-website-production-App/e36fce70-72b0-11ee-ab74-0e69f23ceced",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:937857771961:changeSet/PipelineChange/711c24ff-b934-414a-a700-00366e89908b&stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/share-website-production-App/e36fce70-72b0-11ee-ab74-0e69f23ceced",
              percent_complete: null,
              error_details: null,
            },
          },
          {
            name: "Deploy",
            latest_execution: {
              action_execution_id: "124c7403-4fcd-45c8-81ae-22071874ca1b",
              status: "Succeeded",
              summary: "Stack share-website-production-App was created.",
              last_status_change: "2023-10-24T21:17:32.423Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/share-website-production-App/e36fce70-72b0-11ee-ab74-0e69f23ceced",
              external_execution_url:
                "https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:937857771961:stack/share-website-production-App/e36fce70-72b0-11ee-ab74-0e69f23ceced",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "webhook-queue-production-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "ddf43fcb-0bc8-4974-b58b-83fc3afedd71",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #42 from CoSchedule/dependabot/npm_and_yarn/semver-6.3.1\\n\\nBump semver from 6.3.0 to 6.3.1"}',
              last_status_change: "2023-07-24T17:28:11.549Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "7d441c6fe693c87e9ac07e0dba21974783e5cb25",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "524ec9c4-28f6-4b06-9aa9-f5f06ae841f9",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-07-24T17:29:56.118999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "webhook-queue:8891fefa-9ace-47cc-b749-7a7b49d8ab05",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/webhook-queue:8891fefa-9ace-47cc-b749-7a7b49d8ab05/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "webhook-queue-staging-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "252e0f4d-968f-4571-8e36-b90eb9570362",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'production\' into staging"}',
              last_status_change: "2023-07-24T16:44:40.342999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "2d9b12e00f5ea3137adef415bb58e9fbdfdae829",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "c2cd5afc-085f-4f1c-8056-842d5188434d",
              status: "Succeeded",
              summary: null,
              last_status_change: "2023-07-24T16:46:20.250999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "webhook-queue:5ea4589f-02d6-4f08-a808-0162d3a5912d",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/webhook-queue:5ea4589f-02d6-4f08-a808-0162d3a5912d/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "website-production-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "560b3eaf-66eb-4604-b764-7d0fdabe32f8",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge pull request #4151 from CoSchedule/web/fix-link\\n\\nfix: broken link"}',
              last_status_change: "2024-02-23T20:59:10.293999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "94375489d3b7f52966f88aaa48ceba41cbaf7813",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "2e3d0a66-a3e7-43fa-9758-5a246ca98e05",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T21:08:04.772Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "website:4707a15e-3f88-48fa-b44a-4f0833a206e3",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/website:4707a15e-3f88-48fa-b44a-4f0833a206e3/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
  {
    name: "website-staging-pipeline",
    stages: [
      {
        name: "Source",
        actions: [
          {
            name: "Source",
            latest_execution: {
              action_execution_id: "d19cd462-65ee-49ff-be5a-c8bf47055ede",
              status: "Succeeded",
              summary:
                '{"ProviderType":"GitHub","CommitMessage":"Merge branch \'infra/postcss\' into staging"}',
              last_status_change: "2024-02-23T22:03:17.000999Z",
              token: null,
              last_updated_by: null,
              external_execution_id: "0039fdd2204c53d363364af3a7bc3c3c5a167653",
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
            name: "Build",
            latest_execution: {
              action_execution_id: "a5b4122e-9116-4c1a-8915-1698ee847d47",
              status: "Succeeded",
              summary: null,
              last_status_change: "2024-02-23T22:17:30.835999Z",
              token: null,
              last_updated_by: null,
              external_execution_id:
                "website:d735b936-5545-4ca9-a865-4178887f59b4",
              external_execution_url:
                "https://console.aws.amazon.com/codebuild/home?region=us-east-1#/builds/website:d735b936-5545-4ca9-a865-4178887f59b4/view/new",
              percent_complete: null,
              error_details: null,
            },
          },
        ],
      },
    ],
  },
];
