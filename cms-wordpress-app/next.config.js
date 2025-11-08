/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // WordPress images configuration - commented out for simple landing page
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http", 
  //       hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME || "localhost",
  //       port: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
