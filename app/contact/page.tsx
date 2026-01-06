import Section from '@/components/ui/Section'
import { ContactForm } from '@/components/sections/ContactForm'
import { Mail, Phone, MapPin, Clock, Home } from 'lucide-react'
import FinalCTA from '@/components/sections/FinalCTA'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <Section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/Snapchat-200544002.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-8 animate-reveal text-center md:text-left">
            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Contact Us</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic font-serif text-white">Get in Touch.</h1>
            <p className="text-xl text-secondary-foreground leading-relaxed font-light mb-10">
              We are here to help you plan your perfect event. Send us a message or call us today for a free talk about your event.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-32 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-12">
              {[
                { icon: Phone, label: 'Direct Line', val: '(+234) 0810 909 7058', href: 'tel:+2348109097058' },
                { icon: Mail, label: 'Inquiries', val: 'astardecoration@gmail.com', href: 'mailto:astardecoration@gmail.com' },
                { icon: MapPin, label: 'Office', val: 'Kano State, Nigeria', href: '#' },
                { icon: Clock, label: 'Hours', val: 'Mon - Sat: 9am - 6pm', href: '#' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <a href={item.href} className="text-xl font-bold hover:text-primary transition-colors">{item.val}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-12 glass border-white/5 space-y-8">
              <h3 className="text-2xl font-bold tracking-tight italic font-serif">Quick Chat</h3>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                Prefer instant messaging? Our WhatsApp hospitality team is online and ready to assist you.
              </p>
              <a
                href="https://wa.me/2348109097058"
                className="btn-premium w-full text-center block"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="animate-reveal">
            <div className="space-y-8 mb-12">
              <h2 className="text-4xl font-bold">Reserve Your <span className="italic font-serif text-primary">Space</span></h2>
              <p className="text-secondary-foreground">Fill out our formal inquiry form and one of our directors will contact you within 24 hours.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
