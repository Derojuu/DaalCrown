'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'

const categories = [
  {
    name: 'Training & group discussions',
    detail: 'Structural steel, reinforcement, and fabricated assemblies.',
    src: 'https://images.unsplash.com/vector-1776389485837-4e4688d49103?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Goods & Services',
    detail: 'Cementitious systems, blocks, and tested mixes for performance.',
    src: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Finishes & envelope',
    detail: 'Tiles, coatings, glazing interfaces, and weather barriers.',
    src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Building systems',
    detail: 'Coordinated procurement for mechanical, electrical, and specialty systems.',
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
  },
]

const Materials = () => {
  return (
    <section id="materials" className="section-y bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Materials marketplace"
          title="Supply that protects the schedule"
          description="Curated sourcing, verified quality, and delivery aligned to construction sequencing—so crews stay productive."
          centered
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border border-border bg-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={c.src}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-base font-bold uppercase tracking-[0.08em] text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                {/*<button suppressHydrationWarning type="button" className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                  Browse category
                </button>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Materials
