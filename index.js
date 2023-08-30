import * as artifact from "@actions/artifact";

artifact
  .create()
  .uploadArtifact("my-artifact", ["index.js"], ".")
  .then(() => {
    console.log("Artifact uploaded!");
  });
