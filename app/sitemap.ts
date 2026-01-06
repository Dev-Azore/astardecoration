import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://astardecoration.com' // Replace with actual production domain when ready

    const routes = [
        '',
        '/about',
        '/services',
        '/gallery',
        '/partners',
        '/team',
        '/contact',
        '/terms',
        '/privacy-policy',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}
