'use client'

import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="section-ambient">
        <div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/12 blur-[120px] dark:bg-primary/8" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/8 blur-[100px] dark:bg-primary/6" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-primary/25 via-transparent to-primary/10 opacity-80 blur-xl dark:from-primary/15 dark:to-primary/5" />
          <div className="glass-panel relative rounded-[1.65rem] border border-primary/15 p-10 text-center md:p-16">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="font-playfair text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Ready to Transform Your Vision?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-muted-foreground">
              Join hundreds of successful projects. Let&apos;s discuss how we can bring excellence to your next endeavor.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 hover:scale-[1.02] hover:bg-primary/90 sm:w-auto">
                Start Your Project
              </button>
              <button className="w-full rounded-full border border-primary/40 bg-background/50 px-10 py-4 font-semibold text-primary backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/10 sm:w-auto dark:bg-background/30">
                Schedule Call
              </button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border/60 pt-10 md:grid-cols-4 md:gap-6">
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'info@daalcrown.com',
                },
                {
                  icon: '📱',
                  label: 'Phone',
                  value: '+1 (555) 123-4567',
                },
                {
                  icon: '📍',
                  label: 'Address',
                  value: 'Business Hub',
                },
                {
                  icon: '🕐',
                  label: 'Hours',
                  value: '24/7 Support',
                },
              ].map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <p className="text-2xl" aria-hidden>
                    {item.icon}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
