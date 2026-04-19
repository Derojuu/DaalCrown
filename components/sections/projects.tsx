'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/common/section-heading'

const projects = [
  {
    title: 'Metro mobility program',
    place: 'Middle East',
    image:
      'https://images.unsplash.com/photo-1556695736-d287caebc48e?auto=format&fit=crop&w=1200&q=80',
    detail: 'Large-scale transit infrastructure delivered with integrated systems commissioning.',
  },
  {
    title: 'Energy expansion campus',
    place: 'North America',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    detail: 'Complex industrial delivery with rigorous QA and schedule protection.',
  },
  {
    title: 'Regional airport modernization',
    place: 'Asia Pacific',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    detail: 'High-traffic aviation work with phased operations and safety-first sequencing.',
  },
  {
    title: 'Water treatment resilience upgrade',
    place: 'Europe',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    detail: 'Critical infrastructure rehabilitation with minimal service disruption.',
  },
  {
    title: 'Advanced manufacturing facility',
    place: 'United States',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    detail: 'Greenfield delivery combining structural, MEP coordination, and startup support.',
  },
]

const Projects = () => {
  const scroller = useRef<HTMLDivElement>(null)

  const scrollByDir = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section-y border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <SectionHeading
              subtitle="Featured work"
              title="Projects that raise the bar"
              description="A snapshot of the kinds of programs we support—complex, consequential, and delivered with integrated teams."
              centered={false}
            />
          </div>
          <div className="flex gap-2 self-end">
            <button suppressHydrationWarning
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-border bg-background text-foreground transition hover:border-accent"
              aria-label="Previous"
              onClick={() => scrollByDir(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button suppressHydrationWarning
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-border bg-background text-foreground transition hover:border-accent"
              aria-label="Next"
              onClick={() => scrollByDir(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="w-[min(100%,380px)] shrink-0 snap-start border border-border bg-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="380px"
                />
                <span className="absolute left-4 top-4 bg-navy-deep/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {project.place}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-[0.06em] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
                <button suppressHydrationWarning type="button" className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                  Project details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
