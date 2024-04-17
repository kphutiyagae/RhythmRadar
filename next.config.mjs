/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname: 'daylist.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      },
      {
        protocol: 'https',
        hostname: 'thisis-images.spotifycdn.com'
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co'
      },
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com'
      },
      {
        protocol: 'https',
        hostname: 'wrapped-images.spotifycdn.com'
      },
      {
        protocol: 'https',
        hostname: 'seeded-session-images.scdn.co'
      },
      {
        protocol: 'https',
        hostname: 'i2o.scdn.co'
      }
    ]
  }
};

export default nextConfig;
