// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CodePipelineViewer",
    platforms: [
        .macOS(.v14)
    ],
    products: [
        .executable(name: "CodePipelineViewer", targets: ["CodePipelineViewer"])
    ],
    dependencies: [
        .package(url: "https://github.com/awslabs/aws-sdk-swift.git", from: "1.0.0"),
        .package(url: "https://github.com/sparkle-project/Sparkle.git", from: "2.0.0"),
    ],
    targets: [
        .executableTarget(
            name: "CodePipelineViewer",
            dependencies: [
                .product(name: "AWSCodePipeline", package: "aws-sdk-swift"),
                .product(name: "Sparkle", package: "Sparkle"),
            ],
            path: "CodePipelineViewer"
        )
    ]
)
