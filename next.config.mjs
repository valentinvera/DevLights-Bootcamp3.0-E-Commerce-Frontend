/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["http://localhost:8000", "https://s3-alpha-sig.figma.com"]
  },
}

export default nextConfig
