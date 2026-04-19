'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HERO_IMG =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80'

const Hero = () => {
  return (
    <section className="relative min-h-[min(92vh,920px)] w-full overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Construction and infrastructure"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,920px)] max-w-[1600px] flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 text-white/90"
          >
            Construction · Rehabilitation · Materials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            Doing what demands precision—at scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            From planning and procurement to safe execution in the field, we help owners deliver iconic work—modeled on
            the clarity, integration, and delivery discipline of leading EPC organizations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button suppressHydrationWarning
              type="button"
              className="btn-corporate px-8 py-3.5"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View projects
            </button>
            <button suppressHydrationWarning
              type="button"
              className="inline-flex items-center justify-center border border-white/90 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Talk to our team
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/55 md:flex"
          aria-hidden
        >
          <span className="h-px w-12 bg-white/30" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
