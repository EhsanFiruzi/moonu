import type { NextConfig } from "next";
const config: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 90, 95] },
};
export default config;
