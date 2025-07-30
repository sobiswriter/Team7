/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Team7',
  output: 'export',
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
