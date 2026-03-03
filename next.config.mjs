/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress build warnings for projects without og-image assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;
