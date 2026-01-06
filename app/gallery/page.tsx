'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import { galleryImages } from '@/data/gallery'
import GalleryLightbox from '@/components/sections/GalleryLightbox'
import FinalCTA from '@/components/sections/FinalCTA'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export default function GalleryPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(item => item.type === filter)

  return (
    <>
      <Section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/Snapchat-922676934.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl space-y-8 animate-reveal">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">Our Work</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic font-serif text-white uppercase">Gallery.</h1>
            <p className="text-xl text-secondary-foreground leading-relaxed font-light mb-10">
              See the beautiful events we have created for our happy clients. Each photo shows our hard work and love for decoration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-32 bg-background">
        <div className="container mx-auto px-6">
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-8 mb-20 border-b border-white/10 pb-10">
            {['all', 'image', 'video'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as 'all' | 'image' | 'video')}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-300 relative group pb-2 ${filter === type ? 'text-primary' : 'text-muted-foreground hover:text-white'
                  }`}
              >
                {type}s
                {filter === type && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((img, i) => (
              <ScrollReveal key={i} delay={i % 3 * 100}>
                <button
                  className="w-full relative group overflow-hidden bg-muted break-inside-avoid shadow-2xl"
                  onClick={() => setLightboxIdx(i)}
                >
                  <div className="relative">
                    {img.type === 'video' ? (
                      <div className="relative aspect-video">
                        <video src={img.src} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full transition-all duration-[1.5s] group-hover:scale-105"
                      />
                    )}

                    {/* Framed Look */}
                    <div className="absolute inset-0 border border-primary/20 m-6 pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-black/80 to-transparent text-left z-20">
                    <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2">{img.type === 'video' ? 'Motion' : 'Static'} View</p>
                    <p className="text-white text-lg font-bold italic font-serif">{img.alt}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-32 text-center space-y-8">
            <h4 className="text-2xl font-light italic font-serif text-secondary-foreground">And many more unforgettable moments...</h4>
            <div className="flex justify-center">
              <a href="/contact" className="btn-premium">Book Us for Your Event</a>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />

      {lightboxIdx !== null && (
        <GalleryLightbox
          images={galleryImages}
          initialIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}
    </>
  )
}
