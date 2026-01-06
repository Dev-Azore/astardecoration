import { useState } from 'react'
import Image from 'next/image'
import { GalleryItem } from '@/data/gallery'

const GalleryLightbox = ({ images, initialIndex, onClose }: { images: GalleryItem[]; initialIndex: number; onClose: () => void }) => {
  const [index, setIndex] = useState(initialIndex)
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const currentItem = images[index]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <button
        className="absolute top-10 right-10 text-white hover:text-primary transition-colors z-50 p-4"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <div className="text-4xl font-light">&times;</div>
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-6 md:p-20">
        <button
          className="absolute left-6 md:left-10 text-white hover:text-primary transition-colors z-50 p-4"
          onClick={prev}
          aria-label="Previous item"
        >
          <div className="text-4xl font-light">&#8592;</div>
        </button>

        <div className="relative w-full h-full flex items-center justify-center animate-reveal">
          {currentItem.type === 'video' ? (
            <video
              src={currentItem.src}
              controls
              autoPlay
              className="max-h-full max-w-full rounded-none shadow-2xl border border-white/10"
            />
          ) : (
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-full max-w-full object-contain shadow-2xl border border-white/10"
            />
          )}
        </div>

        <button
          className="absolute right-6 md:right-10 text-white hover:text-primary transition-colors z-50 p-4"
          onClick={next}
          aria-label="Next item"
        >
          <div className="text-4xl font-light">&#8594;</div>
        </button>
      </div>

      <div className="absolute bottom-10 left-10 md:left-20 z-50 space-y-2">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">{currentItem.type === 'video' ? 'Video Experience' : 'Captured Moment'}</p>
        <p className="text-white text-2xl md:text-4xl font-bold italic font-serif max-w-2xl">{currentItem.alt}</p>
      </div>
    </div>
  )
}
export default GalleryLightbox
