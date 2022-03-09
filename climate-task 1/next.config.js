/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
