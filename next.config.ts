import type { NextConfig } from "next";

// GitHub Pages serves static files only, so the site is exported to ./out.
// NEXT_PUBLIC_BASE_PATH is "/<repo>" on a project site (set by the workflow) and empty otherwise.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
};

export default config;
