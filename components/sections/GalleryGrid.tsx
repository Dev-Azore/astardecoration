import { galleryImages } from '@/data/gallery'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

interface GalleryGridProps {
  limit?: number
  onImageClick: (index: number) => void
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ limit, onImageClick }) => {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((img, i) => (
        <ScrollReveal
          key={i}
          delay={i * 100}
          threshold={0.1}
        >
          <button
            className="aspect-[4/5] w-full relative group overflow-hidden bg-muted"
            onClick={() => onImageClick(i)}
          >
            <div className="absolute inset-0 z-0">
              {img.type === 'video' ? (
                <video src={img.src} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                />
              )}
            </div>

            {/* Framed Look (About Section Style) */}
            <div className="absolute inset-0 border border-primary/20 m-6 pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {img.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                  <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent ml-1" />
                </div>
              </div>
            )}

            {/* Overlay Lens */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-30 flex items-end p-8">
              <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  <span className="text-[10px] text-primary font-bold uppercase tracking-[0.3em]">View Atmosphere</span>
                </div>
                <h4 className="text-white text-xl font-bold italic font-serif leading-tight">
                  {img.alt}
                </h4>
              </div>
            </div>
          </button>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default GalleryGrid
