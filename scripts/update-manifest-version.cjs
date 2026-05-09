const fs = require("fs");

const pkg = require("../package.json");

const manifestPath = "public/manifest.json";

const manifest = JSON.parse(
  fs.readFileSync(manifestPath, "utf8")
);

manifest.version = pkg.version;

fs.writeFileSync(
  manifestPath,
  JSON.stringify(manifest, null, 2)
);

console.log(
  `Updated manifest version to ${pkg.version}`
);