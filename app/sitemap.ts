import { MetadataRoute } from 'next'
import recipeIndex from '@/data/index.json'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourwebsite.com' // Update this with your actual domain
  
  const recipeUrls = recipeIndex.recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...recipeUrls,
  ]
}
