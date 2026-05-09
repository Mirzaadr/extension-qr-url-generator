/**
 * @type {import('semantic-release').GlobalConfig}
 */
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
      "@semantic-release/exec",
      {
        prepareCmd: [
          "npm version ${nextRelease.version} --no-git-tag-version",
          "npm run version:update",
          "npm run build",
          "cd dist && zip -r ../qr-extension.zip . -x '*.DS_Store' -x '__MACOSX'"
        ].join(" && ")
      }
    ],

    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
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
    ],
    [
      "@semantic-release/npm", 
      {
        "npmPublish": false
      }
    ],
  ]
};