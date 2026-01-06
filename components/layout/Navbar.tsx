'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Navigation } from 'lucide-react'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Partners', href: '/partners' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled || isExpanded ? 'h-auto glass border-b border-white/5 bg-background/80' : 'h-28 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="group flex items-center">
              <div className="flex flex-col">
                <span className={`text-2xl md:text-3xl font-black tracking-[-0.05em] text-white leading-none uppercase group-hover:text-primary transition-colors duration-500`}>
                  A.Star<span className="text-primary italic font-serif">.</span>
                </span>
                <span className="text-[7px] md:text-[8px] text-primary font-bold uppercase tracking-[0.5em] mt-1 opacity-80 whitespace-nowrap">
                  Decoration & Rental Services
                </span>
              </div>
            </Link>

            {/* Manual Toggle Button */}
            {!isExpanded ? (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 text-white rounded-full transition-all duration-500 group shadow-lg"
                title="Navigate"
              >
                <Navigation size={18} className="text-primary group-hover:rotate-12 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary rounded-full transition-all duration-500"
                title="Hide"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Expanded Links (Desktop & Tablet) */}
          <div
            className={`transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[500px] mt-12 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 pb-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsExpanded(false)}
                  className="p-4 border border-white/5 hover:border-primary/20 bg-white/[0.02] hover:bg-primary/5 text-center group transition-all duration-300"
                >
                  <p className="text-white/60 group-hover:text-primary text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 pb-4">
              <div className="flex gap-8">
                <a href="https://www.instagram.com/a_star_decoration?igsh=MXhoeHIpeGtsZWoxag==" target="_blank" className="text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors">Instagram</a>
                <a href="http://www.facebook.com/share/1GCYFz6xwb/" target="_blank" className="text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors">Facebook</a>
                <a href="https://www.tiktok.com/@a_star_decor.1?_r=1&_t=ZS-92qLmWiNKkP" target="_blank" className="text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors">TikTok</a>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsExpanded(false)}
                className="btn-premium !py-3 !px-12 text-[10px]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
