import Section from '@/components/ui/Section'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">Privacy <span className="italic font-serif text-primary">Policy.</span></h1>
            <p className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">Last Updated: January 2026</p>
            <div className="flex justify-center pt-8">
              <Link href="/" className="btn-outline flex items-center gap-2">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-32 bg-background">

        <div className="prose prose-invert max-w-none space-y-12 text-secondary-foreground leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight italic font-serif">01. Information Collection</h2>
            <p>We respect your privacy and are committed to protecting your personal information. A. Star Decoration & Rental Services collects only the necessary details required to provide our elite event styling services.</p>
            <ul className="list-disc pl-6 space-y-4 marker:text-primary">
              <li>Personal identification (Name, Email, Phone Number).</li>
              <li>Event-specific details (Date, Location, Guest Count).</li>
              <li>Communication history via our booking forms and WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight italic font-serif">02. Data Usage</h2>
            <p>Your data is used solely to respond to your inquiries, customize your event experience, and ensure seamless delivery of our rental services. We do not sell, trade, or otherwise transfer your information to outside parties.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight italic font-serif">03. Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. All booking data submitted through our website is handled through secure processing channels.</p>
          </section>

          <section className="pt-12 border-t border-white/5 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">For any inquiries regarding your data, please contact</p>
            <a href="mailto:privacy@astar-decoration.com" className="text-primary font-bold hover:underline">privacy@astar-decoration.com</a>
            <div className="pt-12">
              <Link href="/" className="btn-outline !py-3 !px-8 text-[10px]">Return to Home</Link>
            </div>
          </section>
        </div>
      </Section>
    </>
  )
}
