import React from "react"
import Link from "next/link"
import Section from "@/components/ui/Section"

const AboutPreview = () => {
  return (
    <Section id="about" className="bg-background py-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting EXTRAORDINARY <br />
              <span className="text-primary italic">Experiences</span>
            </h2>
          </div>
          <p className="text-lg text-secondary-foreground leading-relaxed max-w-xl">
            A. Star Decoration & Rental Services is a leading provider of elite event styling and luxury rentals. We don&apos;t just decorate spaces; we curate atmosphere, structure, and emotion.
          </p>
          <p className="text-secondary-foreground leading-relaxed max-w-xl">
            From intimate weddings to grand scale corporate gala, our team transforms visions into reality with precision, creativity, and a touch of the extraordinary.
          </p>
          <div className="pt-4">
            <Link href="/about" className="group inline-flex items-center space-x-2 text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
              <span>Learn our process</span>
              <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full z-0" />
          <img
            src="/images/gallery/preview.jpg"
            alt="Elite Event Styling"
            className="rounded-none shadow-2xl w-full h-[500px] object-cover relative z-10 border border-white/10"
          />
        </div>
      </div>
    </Section>
  )
}

export default AboutPreview
