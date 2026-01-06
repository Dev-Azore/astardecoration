'use client'

import React from 'react'
import { partnersData } from '@/data/partners'
import Section from '@/components/ui/Section'
import Link from 'next/link'

const PartnersPreview = () => {
  return (
    <Section className="py-32 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">Credibility</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Collaborative <span className="italic font-serif text-primary">Excellence.</span></h2>
          </div>
          <Link href="/partners" className="btn-outline">
            View All Partners
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-60">
          {partnersData.slice(0, 5).map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group transition-all duration-500 hover:opacity-100 grayscale hover:grayscale-0">
              <div className="text-3xl font-bold tracking-tighter text-white/50 group-hover:text-primary transition-colors italic font-serif">
                {partner.name.split(' ')[0]}
              </div>
              <div className="h-px w-0 group-hover:w-12 bg-primary transition-all duration-500" />
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{partner.service}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default PartnersPreview
