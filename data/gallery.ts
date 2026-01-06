export type GalleryItem = {
  src: string;
  alt: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

export const galleryImages: GalleryItem[] = [
  { src: '/images/gallery/Snapchat-922676934.jpg', alt: 'Grand Event Entrance', type: 'image' },
  { src: '/images/gallery/20250904_140123.jpg', alt: 'Premium Traditional Decor', type: 'image' },
  { src: '/images/gallery/20251010_160122.jpg', alt: 'Modern Stage Backdrop', type: 'image' },
  { src: '/images/gallery/Snapchat-1373672628.jpg', alt: 'Luxury Event Arrangement', type: 'image' },
  { src: '/images/gallery/Snapchat-90045224.jpg', alt: 'Premium Rental Showcase', type: 'image' },
  { src: '/images/gallery/Snapchat-1826370856.jpg', alt: 'Grand Hall Decoration', type: 'image' },
  { src: '/images/gallery/Snapchat-200544002.jpg', alt: 'Exclusive VIP Setup', type: 'image' },
  { src: '/images/gallery/Snapchat-2136468039.jpg', alt: 'Artistic Event Support', type: 'image' },
  { src: '/images/gallery/Snapchat-355540161.jpg', alt: 'Elegant Banquet Styling', type: 'image' },
  { src: '/images/gallery/Snapchat-164461637.jpg', alt: 'Sophisticated Floral Design', type: 'image' },

  // Videos
  { src: '/images/gallery/Snapchat-1231245739.mp4', alt: 'Dynamic Event Highlights', type: 'video' },
  { src: '/images/gallery/Snapchat-331224477.mp4', alt: 'Atmosphere Reveal', type: 'video' },
  { src: '/images/gallery/Snapchat-593497828.mp4', alt: 'Styling Process', type: 'video' },
  { src: '/images/gallery/Snapchat-1596458528.mp4', alt: 'A.Star Celebration', type: 'video' },
  { src: '/images/gallery/Snapchat-1520955071.mp4', alt: 'Luxury Backdrop View', type: 'video' },
  { src: '/images/gallery/2025-05-16-204934599.mp4', alt: 'Grand Entrance Highlight', type: 'video' }
]
