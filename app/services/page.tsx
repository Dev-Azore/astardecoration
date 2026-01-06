'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import { servicesData } from '@/data/services'
import { Check, Home } from 'lucide-react'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/20250904_140123.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8 text-center md:text-left">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">Our Expertise</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">
              Our Best <br /> <span className="italic font-serif text-primary">Event Services.</span>
            </h1>
            <p className="text-xl text-secondary-foreground leading-relaxed max-w-2xl font-light">
              A.Star Decoration & Rental Services provides everything you need for a beautiful event. From planning to setup, we make sure everything is perfect.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {servicesData.map((service, i) => (
              <div key={service.id} className="group space-y-8 animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <ScrollReveal delay={i * 50} threshold={0.2}>
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 glass px-4 py-2 text-[10px] text-white font-bold uppercase tracking-widest z-20">0{i + 1}</div>
                  </div>
                </ScrollReveal>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold uppercase">{service.title}</h3>
                    <p className="text-primary italic font-serif">{service.category}</p>
                  </div>
                  <p className="text-secondary-foreground leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-secondary-foreground italic font-serif">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors"
                    >
                      Enquire for this service
                      <span className="w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center space-y-20">
          <h2 className="text-4xl font-bold uppercase tracking-tight">The Service <span className="italic font-serif text-primary">Journey</span></h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { title: 'Consultation', desc: 'Understanding your unique story and vision.' },
              { title: 'Curation', desc: 'Selecting materials and structures that fit.' },
              { title: 'Creation', desc: 'Meticulous setup by our elite styling team.' },
              { title: 'Celebration', desc: 'A seamless, extraordinary event experience.' }
            ].map((step, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mx-auto group-hover:border-primary transition-colors duration-500">
                  <span className="text-2xl font-bold group-hover:text-primary transition-colors italic font-serif">{i + 1}</span>
                </div>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">{step.title}</h4>
                <p className="text-xs text-secondary-foreground leading-relaxed max-w-[200px] mx-auto opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
