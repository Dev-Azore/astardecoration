"use client"

import React, { useState, useEffect, useRef } from "react"

interface HeroProps {
  title: string
  subtitle: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  videoSrc?: string
  imageSrc?: string
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  videoSrc,
  imageSrc,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Load video after page content is ready
    if (videoSrc && videoRef.current) {
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.src = videoSrc
          videoRef.current.load()
        }
      }, 500) // Delay video load by 500ms to prioritize page content

      return () => clearTimeout(timer)
    }
  }, [videoSrc])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Poster Image Background (Always visible first) */}
      {imageSrc && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-60"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      {/* Video Background (Fades in when loaded) */}
      {videoSrc && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-60' : 'opacity-0'
            }`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoaded}
        />
      )}

      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto space-y-10 animate-reveal">
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] uppercase">
          {title.split(" ").map((word, i) => (
            <span key={i} className={`inline-block mx-1 ${i % 3 === 2 ? 'text-primary italic font-serif' : ''}`}>
              {word}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl font-light leading-relaxed tracking-wide">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center pt-6">
          <a
            href={ctaPrimary.href}
            className="btn-premium"
          >
            {ctaPrimary.label}
          </a>
          <a
            href={ctaSecondary.href}
            className="btn-outline"
          >
            {ctaSecondary.label}
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-white" />
        </div>
      </div>
    </section>
  )
}
export default Hero
