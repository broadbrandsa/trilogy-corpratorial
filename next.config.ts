import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a stray lockfile in the parent
  // dev-projects folder otherwise confuses Turbopack's root inference.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
