'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import GalleryGrid from '@/components/sections/GalleryGrid'
import GalleryLightbox from '@/components/sections/GalleryLightbox'
import Section from '@/components/ui/Section'
import Testimonials from '@/components/sections/Testimonials'
import PartnersPreview from '@/components/sections/PartnersPreview'
import FinalCTA from '@/components/sections/FinalCTA'
import { galleryImages } from '@/data/gallery'
import { ShieldCheck, Award } from 'lucide-react'

export default function HomePage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)

  return (
    <>
      <Hero
        title="Creating Beautiful and Happy Events"
        subtitle="We handle all the decorations and setup so you can enjoy your special day."
        ctaPrimary={{
          label: 'Chat on WhatsApp',
          href: 'https://wa.me/2348109097058',
        }}
        ctaSecondary={{
          label: 'View our Work',
          href: '/gallery',
        }}
        videoSrc="/videos/f2e0eae91fb54dfe9ec51cf98ecbf99e.mp4"
        imageSrc="/images/hero/hero-fallback.jpg"
      />

      <Section className="py-40 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">A Distinguished Choice</h3>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Why <span className="italic font-serif text-primary">A.Star</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            <div className="space-y-10 flex flex-col justify-center animate-reveal">
              <div className="space-y-4 p-8 glass border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <ShieldCheck className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black uppercase text-xs tracking-[0.2em]">Absolute Reliability</h4>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  Punctuality is our promise. We ensure your venue is perfectly styled long before the first guest arrives.
                </p>
              </div>
              <div className="space-y-4 p-8 glass border-white/5 hover:border-primary/20 transition-all duration-500 group">
                <Award className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black uppercase text-xs tracking-[0.2em]">Elite Quality</h4>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  We use only the finest materials, from premium fabrics to artisanal floral arrangements that command attention.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] lg:aspect-auto rounded-none overflow-hidden group shadow-2xl animate-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <img
                src="/images/gallery/IMG-20240523-WA0022.jpg"
                alt="A.Star Decoration Setup"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 z-20 glass p-6 border-white/10 max-w-[180px] group-hover:scale-105 transition-transform duration-700">
                <p className="text-white font-bold uppercase tracking-widest text-[8px] mb-1">Established</p>
                <p className="text-xl font-bold italic text-primary">Since 2014</p>
              </div>
              <div className="absolute inset-0 border border-white/5 z-20" />
            </div>

            <div className="space-y-10 flex flex-col justify-center animate-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="p-10 glass border-white/5 space-y-6">
                <div className="text-4xl font-bold italic font-serif text-primary">10+ Years</div>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  A decade of transforming spaces into masterpieces across Kano and beyond. Our heritage is built on trust and artistic excellence.
                </p>
                <div className="pt-4">
                  <Link href="/about" className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] flex items-center gap-2 group">
                    Learn Our Story <span className="w-8 h-px bg-primary group-hover:w-12 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ServicesPreview />

      <PartnersPreview />

      <Section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h3 className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Our Best Work</h3>
              <h2 className="text-5xl md:text-6xl font-bold uppercase">Event <span className="italic font-serif">Gallery</span></h2>
            </div>
            <Link href="/gallery" className="btn-outline">
              See More Photos
            </Link>
          </div>
          <GalleryGrid limit={6} onImageClick={openLightbox} />
        </div>
      </Section>

      <Testimonials />

      <FinalCTA />

      {lightboxIdx !== null && (
        <GalleryLightbox
          images={galleryImages.slice(0, 6)}
          initialIndex={lightboxIdx}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}
