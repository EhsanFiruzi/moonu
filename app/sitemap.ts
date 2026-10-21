import type { MetadataRoute } from "next";
import { SITE } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const alt = { languages: { fa: `${SITE}/fa`, en: `${SITE}/en` } };
  return ["fa", "en"].map((l) => ({ url: `${SITE}/${l}`, lastModified: new Date(), alternates: alt }));
}
