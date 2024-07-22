/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
    output: "export",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://cjkywe07.github.io/testPage" : "", // production 일때 prefix 경로
};

module.exports = nextConfig;
