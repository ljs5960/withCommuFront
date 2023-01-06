const path = require("path");
/** @type {import('next').NextConfig} */

const isLocal = process.env.NODE_ENV === "local";
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === "production";
const ENV = process.env.NODE_ENV

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  trailingSlash: true,
  serverRuntimeConfig: { // Will only be available on the server side
    rootDir: path.join(__dirname, './'),
    hostname: 'localhost',
    PORT: 8801,
    HTTP: 'http'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/public',
    isDev,
    isLocal,
    isProd,
    ENV,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
