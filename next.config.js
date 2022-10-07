/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://vuanem.com',
                permanent: true,
            }
        ]
    }
};

module.exports = nextConfig;
