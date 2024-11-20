import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["react-chatbot-kit"],
  images: {
    domains: ["cdn2.thecatapi.com"], // Add the domain here
  },
};

export default nextConfig;
