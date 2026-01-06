'use client'

import Link from 'next/link'
import { Instagram, Facebook, Music2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="space-y-8">
            <div className="text-xl md:text-2xl font-bold tracking-tighter text-white uppercase">
              A.Star<span className="text-primary italic font-serif ml-2">Decoration & Rental Services</span>
            </div>
            <p className="text-secondary-foreground leading-relaxed text-sm max-w-xs">
              Handling the beauty, structure, and support of your event so you can focus on enjoying your moment.
            </p>
            <div className="flex space-x-5">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/a_star_decoration?igsh=MXhoeHIpeGtsZWoxag==', icon: Instagram },
                { name: 'Facebook', href: 'http://www.facebook.com/share/1GCYFz6xwb/', icon: Facebook },
                { name: 'TikTok', href: 'https://www.tiktok.com/@a_star_decor.1?_r=1&_t=ZS-92qLmWiNKkP', icon: Music2 }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-secondary-foreground hover:border-primary hover:text-primary transition-all duration-300 group"
                  title={social.name}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Explore</h3>
            <ul className="space-y-5 text-sm text-secondary-foreground">
              {['Home', 'About', 'Services', 'Gallery', 'Team'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Connect</h3>
            <ul className="space-y-5 text-sm text-secondary-foreground">
              <li>
                <a href="mailto:astardecoration@gmail.com" className="hover:text-primary transition-colors block">astardecoration@gmail.com</a>
              </li>
              <li>
                <a href="tel:+2348109097058" className="hover:text-primary transition-colors block">(+234) 0810 909 7058</a>
              </li>
              <li className="pt-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Location</p>
                <p className="leading-relaxed">No 2&5 Ayumsa Plaza, Sabo Bakin Zuwo Road by Ahmed Musa Sports & Fitness Center, Kano State, Nigeria</p>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">Legal</h3>
            <ul className="space-y-5 text-sm text-secondary-foreground">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} A. Star Decoration & Rental Services.</p>
          <div className="flex items-center gap-8">
            <span>By A. Star Decoration</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Back to Top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
