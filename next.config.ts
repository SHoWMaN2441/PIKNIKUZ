import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghqfppbriadkgcmlswyh.supabase.co",
      },
      {
        protocol: "https",
        hostname: "api.piknicuz.com", // ❗ Yangi domen qoʻshildi
      },
    ],
  },
};

export default nextConfig;
