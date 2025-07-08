/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // 정적 파일 경로 설정
  assetPrefix: '',
  basePath: '',
  trailingSlash: false,
}

module.exports = nextConfig 