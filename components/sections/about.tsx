'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'
import GlassCard from '@/components/common/glass-card'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const About = () => {
  const highlights = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Diverse portfolio across residential, commercial, and infrastructure sectors',
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Decades of proven excellence in construction and development',
    },
    {
      number: '1000+',
      label: 'Satisfied Clients',
      description: 'Trusted by individuals, businesses, and government entities',
    },
    {
      number: '50+',
      label: 'Expert Team',
      description: 'Dedicated professionals with specialized expertise',
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <SectionHeading
            subtitle="About Us"
            title="Your Construction Partner"
            description="We specialize in construction, rehabilitation, reconstruction, and building materials supply"
            centered
          />
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24"
        >
          {/* Main Hero Image Block */}
          <motion.div variants={fadeIn} className="lg:col-span-7 h-[400px] lg:h-full relative rounded-3xl overflow-hidden glass shadow-sm">
            <Image
              src="/images/team-workspace.jpg"
              alt="Our expert team"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Cards Stack */}
          <motion.div variants={fadeIn} className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass rounded-3xl p-8 bg-background/50 border border-border">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Our Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience, we deliver complete construction solutions including new build construction, building rehabilitation, structural reconstruction, and premium building materials.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 bg-background/50 border border-border">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine construction expertise with a comprehensive materials marketplace. From planning your project to sourcing materials, we handle everything.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <GlassCard hover className="h-full rounded-2xl p-6 bg-background/50 border border-border transition-all duration-300">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold text-xl">{item.number.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-playfair font-bold text-primary mb-2">{item.number}</h4>
                    <p className="font-semibold text-foreground mb-2">{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <div id="why-us" className="pt-12 border-t border-border/50">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading
              subtitle="Why Choose Us"
              title="What Sets Us Apart"
              description="Reasons why industry leaders trust Daal Crown King Ltd"
              centered
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: 'Proven Track Record',
                description: 'Hundreds of successful projects delivered on time and within budget',
                icon: '✓',
              },
              {
                title: 'Expert Team',
                description: 'Skilled professionals with decades of combined experience',
                icon: '👥',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control at every stage of construction',
                icon: '⭐',
              },
              {
                title: 'Innovation Focus',
                description: 'Latest technologies and methods for optimal results',
                icon: '🚀',
              },
              {
                title: 'Client-Centric',
                description: 'Your needs are our priority from start to finish',
                icon: '💼',
              },
              {
                title: 'Sustainable',
                description: 'Environmentally responsible construction practices',
                icon: '🌱',
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <GlassCard hover className="h-full p-8 rounded-2xl bg-background/50 border border-border">
                  <div className="text-4xl mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
