import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {hostname: 'fakestoreapi.com'},
    ],
  },
}

export default nextConfig;
