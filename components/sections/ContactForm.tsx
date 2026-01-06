"use client"

import React from "react"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const text = `A. STAR BOOKING INQUIRY:%0A- Name: ${name}%0A- Email: ${email}%0A- Phone: ${phone}%0A- Service: ${service}%0A- Message: ${message}`;
    const whatsappUrl = `https://wa.me/2348109097058?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 group">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-2 group/field">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within/field:text-primary transition-colors">Full Name</label>
          <input
            type="text" id="name" name="name" required
            placeholder="Ismail Mustapha"
            className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-primary transition-all font-light"
          />
        </div>
        <div className="space-y-2 group/field">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within/field:text-primary transition-colors">Email Address</label>
          <input
            type="email" id="email" name="email" required
            placeholder="ismail@gmail.com"
            className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-primary transition-all font-light"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-2 group/field">
          <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within/field:text-primary transition-colors">Phone Number</label>
          <input
            type="tel" id="phone" name="phone" required
            placeholder="+234 ..."
            className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-primary transition-all font-light"
          />
        </div>
        <div className="space-y-2 group/field">
          <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within/field:text-primary transition-colors">Select Service</label>
          <select
            id="service" name="service" required
            className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-primary transition-all font-light appearance-none"
          >
            <option value="" className="bg-background text-white">Select a service</option>
            <option value="Decoration" className="bg-background text-white">Decoration</option>
            <option value="Event Styling" className="bg-background text-white">Event Styling</option>
            <option value="Rentals" className="bg-background text-white">Rentals</option>
            <option value="Catering" className="bg-background text-white">Catering</option>
          </select>
        </div>
      </div>

      <div className="space-y-2 group/field">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground group-focus-within/field:text-primary transition-colors">Project Brief</label>
        <textarea
          id="message" name="message" rows={4} required
          placeholder="Tell us about your event..."
          className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-primary transition-all font-light resize-none"
        />
      </div>

      <div className="pt-10">
        <button type="submit" className="btn-premium w-full text-center">
          Send Formal Enquiry
        </button>
      </div>
    </form>
  )
}
