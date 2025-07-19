/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src"],
  },
};

module.exports = nextConfig;
