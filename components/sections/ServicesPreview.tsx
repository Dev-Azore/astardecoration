import { servicesData } from '@/data/services'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { Calendar, Package, Coffee, Users, Music } from 'lucide-react'

const serviceIcons = {
  decoration: Calendar,
  styling: Package,
  rental: Coffee,
  catering: Users,
  stage: Music,
  collaboration: Users,
}

const ServicesPreview = () => {
  return (
    <Section className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">What We Do</h3>
          <h2 className="text-5xl md:text-6xl font-bold">Our Best <span className="italic font-serif text-primary">Services.</span></h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed pt-4">
            We provide top quality services to make your event beautiful and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service, i) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Calendar
            return (
              <div
                key={service.id}
                className="group relative perspective-2000 h-[500px] animate-reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative w-full h-full transition-all duration-1000 preserve-3d group-hover:rotate-y-[-10deg] cursor-pointer">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-50 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-10 flex flex-col justify-end space-y-6">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors duration-500 bg-background/50 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold tracking-tight text-white">{service.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <ul className="text-[10px] uppercase tracking-widest text-primary font-bold space-y-2 mb-6">
                        {service.includes.slice(0, 3).map((item: string) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
                    >
                      Details
                      <span className="w-8 h-px bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                    </Link>
                  </div>

                  {/* Book Page Effect Overlay */}
                  <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-0 w-px h-full bg-white/10 pointer-events-none" />

                  {/* Numbering */}
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    <h4 className="text-6xl font-black italic text-white select-none">0{i + 1}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-24">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </Section>
  )
}
export default ServicesPreview
