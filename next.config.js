/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa");


/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    domains: ['assets.coingecko.com']
  }
}

module.exports = withPlugins([
  [
    withPWA, {
      pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
          disable: process.env.NODE_ENV === "development",
        }
    }
  ],
], nextConfig)

  
  
  
