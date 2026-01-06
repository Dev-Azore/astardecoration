import Section from '@/components/ui/Section'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function TermsPage() {
  return (
    <>
      <Section className="pt-48 pb-32 bg-background relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/IMG-20251009-WA0017.jpg"
            alt="Background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">Terms & <span className="italic font-serif text-primary">Conditions.</span></h1>
            <p className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">Standard Service Agreement</p>
            <div className="flex justify-center pt-8">
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-32 bg-background text-secondary-foreground">

        <div className="space-y-12 leading-relaxed">
          {[
            { title: 'Booking & Confirmation', body: 'All event bookings are subject to availability and are only confirmed upon receipt of a formal deposit and signed agreement. We reserve the right to decline bookings that conflict with our existing schedule.' },
            { title: 'Rental Responsibilities', body: 'Our premium rental items (Cushion Chairs, Carpets, etc.) must be handled with care. The client assumes full responsibility for any loss or damage to equipment during the rental period.' },
            { title: 'Payment Terms', body: 'Our services are premium and tailored. Payment schedules are specified in each individual contract. Late payments may result in service delays or cancellation of the booking.' },
            { title: 'Service Execution', body: 'A. Star Decoration will execute styling based on the agreed-upon vision. Major changes requested within 48 hours of the event may incur additional fees.' }
          ].map((item, i) => (
            <section key={i} className="space-y-4">
              <h2 className="text-2xl font-bold text-white italic font-serif">Section 0{i + 1}: {item.title}</h2>
              <p>{item.body}</p>
            </section>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8">
          <p className="text-xs italic opacity-60">By engaging with our services, you acknowledge and agree to these terms.</p>
          <Link href="/contact" className="btn-premium">Contact for Consultation</Link>
        </div>
      </Section>
    </>
  )
}
