import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* optimization settings */
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export", // Required for GitHub Pages static export
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
