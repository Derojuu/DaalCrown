'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Package, ShoppingCart, Zap, TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/common/section-heading'
import GlassCard from '@/components/common/glass-card'

const Materials = () => {
  const categories = [
    {
      id: 1,
      name: 'Steel & Metals',
      image: '/images/materials-steel.jpg',
      items: 'Structural steel, rebars, metal frames',
      icon: Package,
    },
    {
      id: 2,
      name: 'Concrete & Blocks',
      image: '/images/materials-concrete.jpg',
      items: 'Cement, concrete blocks, aggregates',
      icon: Package,
    },
    {
      id: 3,
      name: 'Finishing Materials',
      image: '/images/materials-tiles.jpg',
      items: 'Tiles, paint, wood, flooring',
      icon: Package,
    },
    {
      id: 4,
      name: 'Building Systems',
      image: '/images/warehouse.jpg',
      items: 'HVAC, electrical, plumbing systems',
      icon: Zap,
    },
  ]

  const highlights = [
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Competitive rates on all construction materials',
    },
    {
      icon: ShoppingCart,
      title: 'Fast Delivery',
      description: 'Quick delivery to your site or warehouse',
    },
    {
      icon: Package,
      title: 'Wide Selection',
      description: 'Comprehensive range of building materials',
    },
    {
      icon: Zap,
      title: 'Quality Assured',
      description: 'All materials tested and certified',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="materials" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <SectionHeading
            subtitle="Materials Marketplace"
            title="Building Materials & Supply"
            description="Premium quality construction materials with competitive pricing and fast delivery"
            centered
          />
        </div>

        {/* Materials Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <GlassCard className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" />
                </div>

                <h3 className="font-playfair text-lg font-bold text-foreground mb-2">
                  {category.name}
                </h3>

                <p className="text-foreground/70 text-sm mb-4">{category.items}</p>

                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                  Shop Category
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-playfair text-lg font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-foreground/70 text-sm">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-playfair text-lg font-bold">
            Browse Materials Catalog
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Materials
