/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "source-map"; // Ensure source maps are enabled in development
    }
    return config;
  },
};
export default nextConfig;
