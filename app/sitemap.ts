import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/payment',
    '/policies',
    '/returns',
    '/shipping',
    '/size-guide',
    '/tracking'
  ];

  return routes.map(route => {
    return {
      url: `https://bubblav-sample-store.vercel.app${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    }
  })
}