/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zenn.dev",
      },
      {
        protocol: "https",
        hostname: "*.zenn.dev",
      },
      {
        protocol: "https",
        hostname: "zenn.studio",
      },
      {
        protocol: "https",
        hostname: "*.zenn.studio",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "qiita.com",
      },
      {
        protocol: "https",
        hostname: "*.qiita.com",
      },
      {
        protocol: "https",
        hostname: "cloud-ace.jp",
      },
      {
        protocol: "https",
        hostname: "*.cloud-ace.jp",
      },
    ],
  },
};

module.exports = nextConfig;
