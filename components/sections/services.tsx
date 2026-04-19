'use client'

import {
  Compass,
  Package,
  HardHat,
  ClipboardList,
} from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'

const pillars = [
  {
    icon: Compass,
    title: 'Design, Painting & Rehabilitation',
    body:
      'Collaborative planning, constructability input, and disciplined scope definition—so what we build matches what you approved.',
  },
  {
    icon: Package,
    title: 'Procurement & Materials',
    body:
      'Responsible sourcing, schedule-aligned deliveries, and verified quality backed by our materials marketplace and supplier network.',
  },
  {
    icon: HardHat,
    title: 'Training & Workshop',
    body:
      'Training, seminar and workshop delivery in complex environments: curriculum design, facilitation, hands-on exercises, participant coordination, and transparent reporting of outcomes.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    body:
      'Integrated controls across safety, cost, and schedule—whether we manage a single phase or the full lifecycle.',
  },
]

const Services = () => {
  return (
    <section id="services" className="section-y border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our services"
          title="Integrated delivery—end to end"
          description="Leveraging full-scale program capabilities, we deploy horizontal and vertical integration strategies to optimize delivery—whether managing an entire lifecycle or a single critical phase."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-16 grid gap-px bg-border md:grid-cols-2"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className="bg-background p-8 lg:p-10"
              >
                <Icon className="h-10 w-10 text-accent" strokeWidth={1.25} />
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                <button suppressHydrationWarning
                  type="button"
                  className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:text-accent"
                >
                  Learn more
                </button>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
