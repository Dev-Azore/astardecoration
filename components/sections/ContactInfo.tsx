import React from "react"

export function ContactInfo() {
  return (
    <div className="mb-10 text-center">
      <p className="text-lg text-gray-700 mb-2">Phone: <a href="tel:+234XXXXXXXXXX" className="text-gold-600 hover:underline">+234 XXX XXX XXXX</a></p>
      <p className="text-lg text-gray-700 mb-2">WhatsApp: <a href="https://wa.me/2348109097058" className="text-gold-600 hover:underline" target="_blank" rel="noopener noreferrer">Chat Now</a></p>
      <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:info@astar-decoration.com" className="text-gold-600 hover:underline">info@astar-decoration.com</a></p>
    </div>
  )
}
