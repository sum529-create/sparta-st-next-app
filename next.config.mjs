/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"], // 외부 이미지 도메인 추가
  },
  reactStrictMode: false,
};

export default nextConfig;
