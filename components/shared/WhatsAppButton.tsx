"use client"

import React from "react"

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/2348109097058"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 group flex items-center gap-4 transition-all duration-500"
      aria-label="Contact on WhatsApp"
    >
      <div className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
        Chat with Us
      </div>
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform duration-500 relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-black fill-current"
        >
          <path d="M12.031 2c-5.518 0-9.997 4.478-9.997 9.996 0 1.763.454 3.42 1.25 4.864l-1.284 4.694 4.802-1.259c1.402.766 2.998 1.2 4.691 1.2.015 0 .031 0 .046-.001a10.01 10.01 0 0 0 10.03-9.995c.001-5.518-4.48-9.999-9.998-9.999h-.04zm0 2c4.425 0 8.031 3.582 8.031 7.996 0 4.407-3.593 7.989-8.01 7.999-.011 0-.022.001-.033.001-1.554 0-2.992-.444-4.218-1.205l-.341-.212-2.834.743.763-2.793-.243-.377a7.971 7.971 0 0 1-1.124-4.156c0-4.414 3.606-7.996 8.01-7.996l.033-.001h-.033z" />
        </svg>
      </div>
    </a>
  )
}
export default WhatsAppButton
