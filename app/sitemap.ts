import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
 
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
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    }
  })
}