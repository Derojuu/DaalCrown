'use client'

import { motion } from 'framer-motion'

const decades = ['2000s', '2010s', '2020s']

const Legacy = () => {
  return (
    <section id="history" className="bg-secondary/80">
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Legacy</p>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
              Creating a lasting legacy
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              What began as a focused construction practice evolved with our customers—adding rehabilitation, structural
              work, and a materials supply arm to keep schedules protected end-to-end.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our story is best told through delivery: safer sites, sharper procurement, and projects that keep
              communities moving forward.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Eras of growth</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {decades.map((d, i) => (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-border bg-background px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground"
                >
                  {d}
                </motion.span>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { k: '15+', l: 'Years delivering' },
                { k: '500+', l: 'Projects supported' },
                { k: '33+', l: 'Regions served' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-4">
                  <p className="font-heading text-3xl font-bold text-primary">{s.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Legacy
