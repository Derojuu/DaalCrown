'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ClipboardList, HardHat, Zap } from 'lucide-react'
import SectionHeading from '@/components/common/section-heading'
import GlassCard from '@/components/common/glass-card'

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: ClipboardList,
      title: 'Consultation & Planning',
      description: 'Meet with our experts to understand your project requirements, budget, and timeline.',
    },
    {
      id: 2,
      icon: HardHat,
      title: 'Design & Preparation',
      description: 'Detailed project design, material selection, and site preparation planning.',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Execution & Construction',
      description: 'Quality construction with regular inspections and material delivery to your site.',
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: 'Completion & Support',
      description: 'Final inspection, handover, and ongoing maintenance support services.',
    },
  ]

  const services = [
    'New Construction',
    'Building Rehabilitation',
    'Structural Reconstruction',
    'Interior Renovation',
    'Material Supply',
    'Project Management',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="process" className="section-y relative bg-background">
      <div className="section-ambient opacity-90">
        <div className="absolute top-1/2 right-0 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] dark:bg-primary/6" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <SectionHeading
            subtitle="How We Work"
            title="Our Construction Process"
            description="A streamlined approach to deliver excellence at every stage"
            centered
          />
        </div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div key={step.id} variants={itemVariants} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent hidden lg:block" />
                )}

                <GlassCard className="h-full rounded-3xl border-border/50 bg-card/70 dark:bg-card/40">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-sans text-2xl font-bold tabular-nums text-primary/35">
                      {String(step.id).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-playfair text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Services Overview */}
        <motion.div
          className="glass-panel rounded-3xl border border-border/60 p-6 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Comprehensive Services
            </h2>
            <p className="mt-3 max-w-xl font-sans text-muted-foreground">
              Everything you need for your construction and renovation projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 rounded-2xl border border-border/40 bg-muted/40 p-4 transition-colors hover:border-primary/25 hover:bg-muted/60 dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
