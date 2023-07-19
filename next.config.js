/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: "my_ultra_secure_nextauth_secret",
    NEXTAUTH_URL: "http://localhost:3000",
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
