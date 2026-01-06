import Section from '@/components/ui/Section'
import { partnersData } from '@/data/partners'
import FinalCTA from '@/components/sections/FinalCTA'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function PartnersPage() {
  return (
    <>
      <Section className="pt-48 pb-32 bg-background text-center relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/vendor-collaboration-kano.png"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">Our Partners</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic font-serif text-white uppercase">People We Work With.</h1>
            <p className="text-xl text-secondary-foreground leading-relaxed font-light mb-10">
              We work with the best photographers, DJs, and venues in Nigeria to make sure your event is perfect.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersData.map((partner, i) => (
              <div
                key={partner.name}
                className="bg-muted/30 p-12 border border-white/5 group hover:border-primary/30 transition-all duration-700 animate-reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary transition-colors">
                  <span className="text-2xl font-bold group-hover:text-primary transition-colors italic font-serif">{partner.name.charAt(0)}</span>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{partner.name}</h3>
                    <p className="text-primary italic font-serif text-sm">{partner.service}</p>
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed opacity-70">
                    {partner.description}
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Collaboration</p>
                    <p className="text-white text-sm">Verified Premium Partner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-muted/20 text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-10">
          <h2 className="text-3xl font-bold uppercase">Interested in <span className="italic font-serif text-primary">Partnering?</span></h2>
          <p className="text-secondary-foreground">We are always looking for elite vendors who share our commitment to extraordinary event delivery. Reach out to our collaboration team.</p>
          <div className="flex justify-center">
            <a href="mailto:astardecoration@gmail.com" className="btn-outline">Become a Partner</a>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
