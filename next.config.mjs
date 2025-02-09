/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'assess.vacademy.io',
            },
          ],
          destination: '/assess/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'lms.vacademy.io',
            },
          ],
          destination: '/lms/:path*',
        }
      ],
    };
  },
};

export default nextConfig;