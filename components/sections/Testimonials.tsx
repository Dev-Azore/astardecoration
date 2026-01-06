'use client'

import React from "react"
import { Quote, UserCircle2 } from 'lucide-react'

interface Testimonial {
  name: string
  quote: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ameenah",
    quote: "A.Star Decoration made our wedding magical! The decor was beautiful and the team was so helpful in every step.",
    initials: "AM"
  },
  {
    name: "Jamila",
    quote: "Professional and reliable. They made our event hall look amazing without any stress. Highly recommended!",
    initials: "JA"
  },
  {
    name: "Salihi",
    quote: "The quality of their chairs and tables is the best in Kano. Everything was delivered on time and in perfect condition.",
    initials: "SA"
  },
]

export const Testimonials: React.FC = () => (
  <section className="py-32 bg-background relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
          <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">Voices of Joy</h3>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            What Our <br /> <span className="italic font-serif text-primary">Clients Say.</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group p-10 bg-muted/20 border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between space-y-8 animate-reveal"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Quote className="w-10 h-10 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="text-xl text-secondary-foreground leading-relaxed font-light italic font-serif">
              &quot;{t.quote}&quot;
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <UserCircle2 className="w-8 h-8 text-primary" strokeWidth={1} />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-white uppercase tracking-widest text-xs uppercase">{t.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3" />
  </section>
)
export default Testimonials
