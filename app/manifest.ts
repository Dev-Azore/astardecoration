import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'A.Star Decoration & Rental Services',
        short_name: 'A.Star',
        description: 'Expert Event Styling and Rental Services in Kano, Nigeria',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#B8860B',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
