/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/realtime-chat-with-socket-fe': { page: '/' },
      '/realtime-chat-with-socket-fe/chat': { page: '/chat' },
    }
  }
}

module.exports = nextConfig
