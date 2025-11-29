import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopackを無効化してWebpackを使用
  experimental: {
    turbo: undefined,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
