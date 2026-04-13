import type { MetadataRoute } from "next";

const BASE = "https://www.vloggle.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/terms", "/privacy"];
  return pages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.5,
  }));
}
