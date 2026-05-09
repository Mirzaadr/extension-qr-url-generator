module.exports = {
  branches: ["test-workflow-2"],

  plugins: [
    "@semantic-release/commit-analyzer",

    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],

    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
          "public/manifest.json"
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]"
      }
    ],

    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "qr-extension.zip",
            label: "Browser Extension"
          }
        ]
      }
    ]
  ]
};