'use client'

import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import Section from '@/components/ui/Section'
import FinalCTA from '@/components/sections/FinalCTA'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export default function AboutPage() {
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

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 animate-reveal">Our Story</h3>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter uppercase">
            Making Your Events <span className="italic font-serif text-primary">Beautiful.</span>
          </h1>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Since 2014, we have been helping people in Nigeria create beautiful memories through great event design and reliable service.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
            <Link href="/" className="btn-outline flex items-center gap-2">
              <Home size={16} /> Back to Home
            </Link>
            <Link href="/contact" className="btn-premium">
              Work With Us
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal threshold={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/gallery/20250904_140123.jpg"
                  alt="A.Star Decoration Portfolio"
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 hover:scale-100"
                />
              </div>
              <div className="absolute inset-0 border border-primary/20 m-6 pointer-events-none z-10" />
            </div>
          </ScrollReveal>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-primary font-bold tracking-[0.3em] uppercase text-xs">The Visionary</h3>
              <h2 className="text-4xl md:text-5xl font-bold uppercase">Behind the <span className="italic font-serif text-primary">Star</span></h2>
            </div>
            <div className="space-y-6 text-secondary-foreground leading-relaxed">
              <p>
                A.Star Decoration & Rental Services is a leading provider of elite event styling and luxury rentals. We don&apos;t just decorate spaces; we curate atmosphere, structure, and emotion.
              </p>
              <p>
                From intimate traditional sittings to grand corporate galas, our team transforms visions into reality with precision, creativity, and a touch of the extraordinary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="space-y-2">
                <span className="text-4xl font-bold text-white">10+</span>
                <p className="text-[10px] uppercase tracking-widest text-primary">Years of Excellence</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold text-white">500+</span>
                <p className="text-[10px] uppercase tracking-widest text-primary">Events Styled</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-background text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-4xl font-bold tracking-tight uppercase">Our Core <span className="italic font-serif text-primary">Philosophy</span></h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { title: 'Excellence', desc: 'We never settle for "good enough". Every detail must be perfect.' },
                { title: 'Trust', desc: 'Reliability is our foundation. We deliver beyond expectations.' },
                { title: 'Culture', desc: 'We honor and elevate the cultural significance of every event.' }
              ].map((p, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-primary italic font-serif text-3xl mb-4">0{i + 1}.</div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">{p.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
