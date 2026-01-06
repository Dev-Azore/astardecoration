import Section from '@/components/ui/Section'
import FinalCTA from '@/components/sections/FinalCTA'
import { Home } from 'lucide-react'
import Link from 'next/link'

const team = [
  { name: 'Abba Meega', role: 'CEO A.Star Decoration & Rental Services. Chief Decorator', image: '/images/gallery/IMG-20240523-WA0022.jpg' },
  { name: 'Mansur Anto', role: 'Lead Operations', image: '/images/gallery/20250904_140123.jpg' },
  { name: 'Hafizu', role: 'Senior Decorator', image: '/images/gallery/Snapchat-164461637.jpg' },
  { name: 'Muhammad', role: 'Styling Specialist', image: '/images/gallery/Snapchat-90045224.jpg' },
  { name: 'Abubakar Kojeje', role: 'Logistics Coordinator', image: '/images/gallery/Snapchat-1826370856.jpg' },
]

export default function TeamPage() {
  return (
    <>
      <Section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/Snapchat-90045224.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] animate-reveal">Our People</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic font-serif uppercase text-white">Meet the Team.</h1>
            <p className="text-xl text-secondary-foreground leading-relaxed font-light mb-10">
              Meet the creative and hard-working people who make every A.Star Decoration project special.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {team.map((member, i) => (
              <div key={i} className="group space-y-6 animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                  <p className="text-primary italic font-serif text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-muted/20 text-center">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <h2 className="text-4xl font-bold tracking-tight uppercase">Team <span className="italic font-serif text-primary">Philosophy</span></h2>
          <p className="text-xl text-secondary-foreground font-light leading-relaxed italic font-serif">
            &quot;We believe in collaboration, creativity, and delivering joy to every client. Our strength lies in our coordinated precision and shared passion for extraordinary beauty.&quot;
          </p>
          <div className="flex justify-center pt-8">
            <div className="h-px w-24 bg-primary" />
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold uppercase">Join the <span className="italic font-serif text-primary">Family</span></h2>
            <p className="text-secondary-foreground leading-relaxed">
              We are always looking for passionate event professionals, logistical geniuses, and creative stylists to join our growing team. If you have the drive for excellence, we want to hear from you.
            </p>
            <div className="pt-4">
              <a href="mailto:astardecoration@gmail.com" className="btn-outline">View Opportunities</a>
            </div>
          </div>
          <div className="aspect-video bg-muted border border-white/5 flex items-center justify-center italic text-muted-foreground p-12 text-center">
            &quot;Excellence is not an act, but a habit. We are what we repeatedly do.&quot;
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
