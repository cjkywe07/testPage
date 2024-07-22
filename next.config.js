/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === "production" ? "https://cjkywe07.github.io/testPage" : "", // production 일때 prefix 경로
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;
