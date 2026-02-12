module.exports = {
  images: {
    domains: ["cdn.dribbble.com", "firebasestorage.googleapis.com"],
  },
  swcMinify: true,
  env: {
    DRIBBBLE_AUTH_KEY: process.env.REACT_APP_DRIBBBLE_AUTH_KEY,
  },
};
