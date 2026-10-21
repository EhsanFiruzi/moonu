import type { MetadataRoute } from "next";
import { SITE } from "@/lib/links";

export const dynamic = "force-static"; // required for `output: "export"`

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE}/sitemap.xml` };
}
