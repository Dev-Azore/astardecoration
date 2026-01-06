'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Section from '@/components/ui/Section'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
            <Section className="space-y-12">
                <div className="space-y-4">
                    <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Lost in Atmosphere?</h3>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase italic font-serif">
                        404<span className="text-primary">.</span>
                    </h1>
                </div>

                <div className="space-y-6">
                    <p className="text-xl text-secondary-foreground max-w-lg mx-auto leading-relaxed font-light">
                        The page you are looking for has been moved or doesn&apos;t exist in our current collection.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/" className="btn-premium flex items-center gap-3">
                        <Home size={16} /> Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="btn-outline flex items-center gap-3"
                    >
                        <ArrowLeft size={16} /> Go Back
                    </button>
                </div>
            </Section>

            {/* Decorative backdrop */}
            <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
            </div>
        </div>
    )
}
