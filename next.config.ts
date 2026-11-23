import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — deployable to Cloudflare Pages, GitHub Pages, S3, etc.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
