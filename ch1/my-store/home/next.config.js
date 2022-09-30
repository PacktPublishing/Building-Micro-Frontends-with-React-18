/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/catalog',
        destination: `http://localhost:3001/catalog`,
      },
      {
        source: '/catalog/:path*',
        destination: `http://localhost:3001/catalog/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
