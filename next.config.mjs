/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.bechtel.com', pathname: '/wp-content/**' },
    ],
  },
  allowedDevOrigins: ['10.251.127.173'],
}

export default nextConfig
