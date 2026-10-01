import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectType } from "./src/sanity/schema/project";
import { siteSettingsType } from "./src/sanity/schema/site-settings";

export default defineConfig({
  name: "portfolio",
  title: "Portafolio Gonzalo",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: [projectType, siteSettingsType] },
});
