/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
      {
        protocol: 'https',
        hostname: 'lovable-mockingbird-306.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'befitting-bullfrog-509.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'dashboard.clerk.com'
      },
      {
        protocol: 'https',
        hostname: 'dashboard.clerk.com'
      },
    ]
  }
};

export default nextConfig;
