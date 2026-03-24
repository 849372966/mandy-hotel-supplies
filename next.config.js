/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trae-api-cn.mchost.guru',
        pathname: '/api/ide/v1/text_to_image/**',
      },
    ],
  },
};

export default nextConfig;
