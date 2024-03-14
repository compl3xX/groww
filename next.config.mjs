/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'fakestoreapi.com' },
        ],
    },

    env: {
        API_URI: 'https://groww-intern-assignment.vercel.app/v1/api/order-details',
    }
};

export default nextConfig;
