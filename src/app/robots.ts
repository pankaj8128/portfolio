import type { MetadataRoute } from "next"

export const dynamic = "force-static"
import { SITE_METADATA } from "@/lib/site-metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
  }
}
