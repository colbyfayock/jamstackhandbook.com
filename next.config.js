/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.producthunt.com',
      'pbs.twimg.com',
      'ph-avatars.imgix.net'
    ],
  },
}

module.exports = nextConfig