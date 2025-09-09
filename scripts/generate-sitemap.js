import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Import blog posts data
import { blogPosts } from '../src/data/blogPosts.js';

// Get __dirname equivalent for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Your website's base URL
const BASE_URL = 'https://susan-beauty-akademie.de';

// Static routes of your application
const staticRoutes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/impressum',
    changefreq: 'monthly',
    priority: 0.3
  },
  {
    url: '/datenschutz',
    changefreq: 'monthly',
    priority: 0.3
  }
];

// Generate dynamic routes for blog posts
const blogRoutes = blogPosts.map(post => ({
  url: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: 0.7,
  lastmod: new Date(post.date).toISOString()
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...blogRoutes];

async function generateSitemap() {
  try {
    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    
    // Create write stream to public directory
    const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));
    
    // Pipe sitemap to write stream
    sitemap.pipe(writeStream);
    
    // Add all routes to sitemap
    allRoutes.forEach(route => {
      sitemap.write(route);
    });
    
    // End the sitemap stream
    sitemap.end();
    
    // Wait for the stream to finish
    await streamToPromise(sitemap);
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📄 Generated ${allRoutes.length} URLs:`);
    allRoutes.forEach(route => {
      console.log(`   - ${BASE_URL}${route.url}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap generation
generateSitemap();