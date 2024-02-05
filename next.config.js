// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;


// const path = require("path");

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Resolve aliases
//     config.resolve.alias["@"] = path.resolve(__dirname, "src");

//     return config;
  
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images:{
//     domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
//   }
// }

// module.exports = nextConfig


// const path = require("path");

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Resolve aliases
//     config.resolve.alias["@"] = path.resolve(__dirname, "src");

//     return config;
//   },
//   images: {
//     domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
//   },
// };



const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    // Resolve aliases
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
  ...nextConfig, // Merge nextConfig into the main configuration
};
