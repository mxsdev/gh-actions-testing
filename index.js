import * as artifact from "@actions/artifact";

console.log({
  token: process.env.ACTIONS_RUNTIME_TOKEN,
  url: process.env.ACTIONS_RUNTIME_URL,
  gh_env: process.env.GITHUB_ENV,
});

// artifact
//   .create()
//   .uploadArtifact("my-artifact", ["index.js"], ".")
//   .then(() => {
//     console.log("Artifact uploaded!");
//   });
