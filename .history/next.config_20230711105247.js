/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    }
    images: {
        domains: [
            "avatars.github"
        ]
    }
}

module.exports = nextConfig
