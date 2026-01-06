'use client'

import React from "react"
import Link from 'next/link'
import { Home } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-40 bg-background relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h3 className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-10">Ready to Start?</h3>
        <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tighter leading-none uppercase">
          Book Your <br /> <span className="italic font-serif text-primary">Event Now.</span>
        </h2>
        <p className="text-xl text-secondary-foreground mb-16 max-w-2xl mx-auto font-light">
          We make your dreams come true. Let&apos;s build something beautiful together.
        </p>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <Link
            href="/"
            className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <Home size={16} /> Home
          </Link>
          <Link
            href="/contact"
            className="btn-premium w-full sm:w-auto text-center"
          >
            Book Now
          </Link>
          <a
            href="https://wa.me/2348109097058"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
export default FinalCTA
