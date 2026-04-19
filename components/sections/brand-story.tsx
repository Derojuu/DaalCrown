'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const STORY_IMG =
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80'

const BrandStory = () => {
  return (
    <section id="brand" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="eyebrow mb-4">Who we are</p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
            We are Daal Crown
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Integrity, innovation, and a refusal to settle are core to how we work. Our teams are builders and
            problem-solvers—turning constraints into opportunities to deliver what others consider impossible.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Behind every blueprint is a commitment to clarity: the right plan, the right materials, and the right people
            in the field.
          </p>
          <button suppressHydrationWarning
            type="button"
            className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent transition hover:text-primary"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch the story (placeholder)
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] lg:min-h-[560px]"
        >
          <Image src={STORY_IMG} alt="Team at work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <button suppressHydrationWarning
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Play video"
          >
            <Play className="ml-1 h-9 w-9 fill-current" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStory
