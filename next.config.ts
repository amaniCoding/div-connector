import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '7gqxz60aa5shpy47.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
