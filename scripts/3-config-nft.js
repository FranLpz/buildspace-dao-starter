import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

import dotenv from "dotenv";
dotenv.config();

const bundleDrop = sdk.getBundleDropModule(
  process.env.DROP_MODULE_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Limited Edition RUM Stamp",
        description: "This NFT will give you access to RumDAO!",
        image: readFileSync("scripts/assets/rum-poster.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()