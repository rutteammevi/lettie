/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["yryqtajizrdgpsoldztr.supabase.co"],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
