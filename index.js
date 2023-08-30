import fs from "node:fs";
import * as artifact from "@actions/artifact";

console.log({
  token: process.env.ACTIONS_RUNTIME_TOKEN,
  url: process.env.ACTIONS_RUNTIME_URL,
  gh_env: process.env.GITHUB_ENV,
});

if (!process.env.GITHUB_ENV) {
  throw new Error("GITHUB_ENV is not defined");
}

fs.appendFileSync(
  process.env.GITHUB_ENV,
  `ACTIONS_RUNTIME_TOKEN=${process.env.ACTIONS_RUNTIME_TOKEN}\n`
);

fs.appendFileSync(
  process.env.GITHUB_ENV,
  `ACTIONS_RUNTIME_URL=${process.env.ACTIONS_RUNTIME_URL}\n`
);

// artifact
//   .create()
//   .uploadArtifact("my-artifact", ["index.js"], ".")
//   .then(() => {
//     console.log("Artifact uploaded!");
//   });
