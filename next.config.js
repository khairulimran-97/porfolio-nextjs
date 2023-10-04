/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: 'khairulimran.com',
        pathname: '/img/**', // Adjust the pathname based on your image directory structure
      },
    ],
  },
}

module.exports = nextConfig
