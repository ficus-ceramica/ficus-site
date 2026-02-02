import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "j7zhdfuw";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-01-01";

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});