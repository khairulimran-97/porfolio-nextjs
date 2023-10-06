/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.dev-aplikasiniaga.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cp.khairulimran.com',
        pathname: '/wp-content/uploads/**', // Adjust the pathname based on your image directory structure
      },
    ],
  },
}

module.exports = nextConfig
