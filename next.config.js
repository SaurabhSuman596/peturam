/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['www.haldirams.com'],
  },
};

module.exports = nextConfig;
