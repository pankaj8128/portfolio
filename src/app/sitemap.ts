import type { MetadataRoute } from "next"

export const dynamic = "force-static"
import { SITE_METADATA } from "@/lib/site-metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "about", "projects", "resume"]

  return routes.map((route) => ({
    url: route === "" ? `${SITE_METADATA.siteUrl}/` : `${SITE_METADATA.siteUrl}/${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
