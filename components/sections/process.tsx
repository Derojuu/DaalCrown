'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ClipboardList, HardHat, Home, Zap, TrendingUp } from 'lucide-react'
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
    <section id="process" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
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

                <GlassCard className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/30">{String(step.id).padStart(2, '0')}</span>
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
          className="glass rounded-xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Comprehensive Services
            </h2>
            <p className="text-foreground/70">
              Everything you need for your construction and renovation projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
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
