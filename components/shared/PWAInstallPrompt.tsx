'use client'

import { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'

export function PWAInstallPrompt() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleBeforeInstallPrompt = (e: any) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault()
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e)
            // Check if the user has already seen/dismissed it
            const dismissed = localStorage.getItem('pwa-prompt-dismissed')
            if (!dismissed) {
                setIsVisible(true)
            }
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        // Show the install prompt
        deferredPrompt.prompt()

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice
        console.log(`User response to the install prompt: ${outcome}`)

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null)
        setIsVisible(false)
        localStorage.setItem('pwa-prompt-dismissed', 'true')
    }

    const handleDismiss = () => {
        setIsVisible(false)
        localStorage.setItem('pwa-prompt-dismissed', 'true')
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-24 left-6 right-6 z-[60] md:left-auto md:right-8 md:bottom-8 md:w-96 animate-reveal">
            <div className="glass p-6 border-primary/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none" />

                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>

                <div className="flex gap-5 items-start relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <Download className="text-black" size={20} />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Install A.Star App</h4>
                        <p className="text-secondary-foreground text-[10px] leading-relaxed">
                            Add A.Star to your home screen for quick access to elite event styling and faster booking.
                        </p>
                        <button
                            onClick={handleInstallClick}
                            className="mt-4 px-6 py-2 bg-primary text-black font-bold uppercase tracking-[0.2em] text-[9px] hover:bg-white transition-all duration-300 rounded-sm shadow-lg shadow-primary/10"
                        >
                            Get the App
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
