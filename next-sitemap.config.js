/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourdomain.com", // Replace with your actual domain
  generateRobotsTxt: true, // Optionally generates robots.txt
  sitemapSize: 5000, // Max number of URLs per sitemap file
  generateIndexSitemap: true, // Ensures the sitemap index is created
};
