/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],

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
          "cd dist && zip -r ../qr-extension.zip . -x '*.DS_Store' -x '__MACOSX' && cd ..",
          "npx web-ext sign --channel=unlisted --source-dir=dist --artifacts-dir=web-ext-artifacts --api-key=$FIREFOX_API_KEY --api-secret=$FIREFOX_API_SECRET"
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
          },

          {
            path: "web-ext-artifacts/*.xpi",
            label: "Signed Firefox Extension"
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