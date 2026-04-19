'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80'

const About = () => {
  return (
    <section id="about" className="border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[340px] lg:min-h-[640px]"
        >
          <Image
            src={ABOUT_IMG}
            alt="Team collaboration on site"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
          <p className="eyebrow mb-4">People & purpose</p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
            Defined by the quality of our people
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our teams bring technical depth, ingenuity, and field experience—helping owners translate ambition into
            executable plans. We win through partnership: aligned incentives, candid communication, and a shared drive to
            deliver.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Motivated by tomorrow&apos;s challenges, we push the limits of what&apos;s possible—without compromising
            safety or integrity.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { t: 'Vision & values', d: 'How we make decisions under pressure.' },
              { t: 'Delivery model', d: 'How we integrate design, materials, and field execution.' },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-accent pl-4">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-foreground">{x.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
