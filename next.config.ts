import type { NextConfig } from "next";
const config: NextConfig = {
  allowedDevOrigins: ['192.168.1.3'],
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 90, 95] },
};
export default config;
