'use client'

import { useState } from 'react'
import { Building2, Hammer, Package, Home, Wrench, TrendingUp, HardHat, Warehouse } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'
import GlassCard from '@/components/common/glass-card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
}

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: Building2,
      title: 'Construction Services',
      description: 'Full-scale construction from residential to commercial',
      details: 'We deliver premium construction services including project management, quality assurance, safety compliance, and timely completion. Our expert team handles residential complexes, commercial buildings, and infrastructure projects.',
      features: ['Planning', 'Building', 'Quality Control'],
    },
    {
      id: 2,
      icon: Hammer,
      title: 'Rehabilitation Services',
      description: 'Expert building rehabilitation and structural repair',
      details: 'Specialized rehabilitation services for aging structures. We assess structural integrity, perform necessary repairs, implement modern upgrades, and restore buildings to peak condition while preserving original character.',
      features: ['Assessment', 'Repair', 'Upgrade'],
    },
    {
      id: 3,
      icon: HardHat,
      title: 'Reconstruction',
      description: 'Complete structural reconstruction and restoration',
      details: 'Full-scale reconstruction services for damaged or deteriorated buildings. Using advanced engineering techniques and quality materials, we rebuild structures to modern standards while maintaining structural integrity.',
      features: ['Engineering', 'Restoration', 'Modernization'],
    },
    {
      id: 4,
      icon: Package,
      title: 'Building Materials',
      description: 'Premium construction materials sales and supply',
      details: 'Comprehensive selection of high-quality building materials including cement, steel, tiles, wood, concrete, and specialized products. We guarantee authentic materials and competitive pricing with delivery services.',
      features: ['Selection', 'Quality', 'Delivery'],
    },
    {
      id: 5,
      icon: Warehouse,
      title: 'Materials Marketplace',
      description: 'Buy and sell construction materials online',
      details: 'Your one-stop marketplace for construction materials. Browse our extensive catalog, compare prices, and purchase directly. We also facilitate material sales and trading between contractors and suppliers.',
      features: ['Browse', 'Compare', 'Trade'],
    },
    {
      id: 6,
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support',
      details: 'Proactive maintenance programs and technical support for your construction projects and properties. Regular inspections, preventive maintenance, repairs, and emergency support services available.',
      features: ['Inspection', 'Support', 'Repairs'],
    },
  ]

  return (
    <section id="services" className="section-y relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      <div className="section-ambient">
        <div className="absolute top-1/4 -left-64 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/[0.07]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/[0.06] blur-[100px] dark:bg-primary/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-20 md:mb-24"
        >
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="Comprehensive solutions tailored to your unique needs"
            centered
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            const isExpanded = expandedService === service.id

            return (
              <motion.div key={service.id} variants={itemVariants} className="h-full">
                <GlassCard 
                  className={`h-full cursor-pointer rounded-3xl transition-all duration-500 border shadow-lg shadow-black/[0.03] dark:shadow-black/40 ${
                    isExpanded
                      ? 'border-primary bg-card shadow-xl shadow-primary/15 ring-1 ring-primary/20'
                      : 'border-border/60 bg-card/80 hover:border-primary/40 hover:shadow-xl dark:bg-card/50'
                  }`}
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl transition-colors duration-300 ${isExpanded ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <motion.div 
                        initial={false}
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground"
                      >
                        +
                      </motion.div>
                    </div>

                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-auto border-t border-border">
                            <p className="text-foreground text-sm leading-relaxed mb-6">
                              {service.details}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
