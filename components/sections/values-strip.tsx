'use client'

import { Shield, Award, Scale, Leaf, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  { icon: Shield, label: 'Safety', text: 'Everyone goes home safe—every day.' },
  { icon: Award, label: 'Quality', text: 'Accountability and craft in every deliverable.' },
  { icon: Scale, label: 'Ethics', text: 'Integrity in how we contract and execute.' },
  { icon: Leaf, label: 'Sustainability', text: 'Responsible methods and smarter materials.' },
  { icon: HeartHandshake, label: 'Communities', text: 'We invest where we build.' },
]

const ValuesStrip = () => {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">How we operate</p>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.04em] text-foreground md:text-3xl">
            Non‑negotiables
          </h2>
          <p className="mt-3 text-muted-foreground">
            The same pillars you see on world-class EPC programs—translated to our projects and partnerships.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border border-border bg-background p-6"
              >
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                  {v.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuesStrip
