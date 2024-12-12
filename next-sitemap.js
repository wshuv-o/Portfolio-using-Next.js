/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'http://localhost:3000',
    generateRobotsTxt: true, // (optional) Generate robots.txt file
    exclude: ['/api/*'], // (optional) Paths to exclude from sitemap
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
  };
  
  module.exports = config;
  