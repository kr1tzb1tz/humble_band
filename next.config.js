/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Digital Ocean App Platform
  // output: 'export',
  
  // Enable static optimization
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig 