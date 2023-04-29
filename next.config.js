/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    localeDetection: false,
  },
}

module.exports = nextConfig
