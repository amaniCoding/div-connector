import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**.vercel.app',
        },
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/api/media/**',
        },
    ],
}
};

module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
}
export default nextConfig;
