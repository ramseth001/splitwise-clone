/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 600,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.splitwise.com"
            }
        ]
    }
}

module.exports = nextConfig
