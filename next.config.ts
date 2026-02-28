import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* optimization settings */
  reactStrictMode: true,
  poweredByHeader: false,
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // Fixes dev mode dynamic route errors
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
