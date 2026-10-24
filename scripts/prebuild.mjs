// Runs before `next build`. On Vercel (or anywhere) with FIGMA_TOKEN set, pulls any missing
// photos from Figma so the deployed site has real images without committing them by hand.
import { existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const dir = "public/images";
const hasImages = existsSync(dir) && readdirSync(dir).some((f) => f.endsWith(".webp"));

if (hasImages) {
  console.log("prebuild: images present, skipping Figma fetch");
} else if (!process.env.FIGMA_TOKEN) {
  console.warn("prebuild: no images and no FIGMA_TOKEN — photo slots will show placeholders");
} else {
  execFileSync(process.execPath, ["scripts/fetch-figma-assets.mjs"], { stdio: "inherit" });
}
