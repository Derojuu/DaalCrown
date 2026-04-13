'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'
import { useScrollActive } from '@/hooks/use-scroll-active'

const ProjectCard = ({ project }: { project: any }) => {
  const { ref, isInView } = useScrollActive()

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[500px] mx-auto"
      data-mobile-active={isInView}
    >
      <div className="group rounded-3xl overflow-hidden bg-background border border-border/60 hover:border-primary/50 data-[mobile-active=true]:border-primary/50 transition-colors duration-500 shadow-xl shadow-black/5 hover:shadow-2xl data-[mobile-active=true]:shadow-primary/10 hover:shadow-primary/10">
        <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 data-[mobile-active=true]:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 data-[mobile-active=true]:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 data-[mobile-active=true]:translate-y-0 transition-all duration-300">
              View Project
            </button>
          </div>
          {/* Badge */}
          <div className="absolute top-4 left-4 px-4 py-1.5 bg-background/90 backdrop-blur text-foreground text-xs font-bold rounded-full shadow-sm">
            {project.completion}
          </div>
        </div>

        <div className="p-8">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-3 group-hover:text-primary data-[mobile-active=true]:text-primary transition-colors">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{project.location}</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.details}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: 'Luxury Residential Complex',
      location: 'Downtown District',
      image: '/images/project-residential.jpg',
      completion: '2023',
      details: 'Modern apartment complex with premium amenities and state-of-the-art facilities',
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Business Tower Development',
      location: 'Central Plaza',
      image: '/images/project-commercial.jpg',
      completion: '2023',
      details: 'State-of-the-art office building with sustainable design and smart technology',
    },
    {
      id: 3,
      category: 'infrastructure',
      title: 'Highway Expansion Project',
      location: 'Metropolitan Area',
      image: '/images/infrastructure.jpg',
      completion: '2022',
      details: 'Multi-lane highway infrastructure upgrade with modern engineering',
    },
    {
      id: 4,
      category: 'residential',
      title: 'Waterfront Residences',
      location: 'Harbor View',
      image: '/images/project-residential.jpg',
      completion: '2023',
      details: 'Luxury beachfront residential development with panoramic views',
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Shopping District Mall',
      location: 'Retail Zone',
      image: '/images/project-commercial.jpg',
      completion: '2022',
      details: 'Modern shopping and entertainment complex with premium retail spaces',
    },
    {
      id: 6,
      category: 'infrastructure',
      title: 'Bridge Engineering Project',
      location: 'River District',
      image: '/images/infrastructure.jpg',
      completion: '2023',
      details: 'Architectural bridge connecting communities with innovative design',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'infrastructure', label: 'Infrastructure' },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="section-y relative overflow-hidden bg-muted/25 dark:bg-muted/10">
      <div className="section-ambient">
        <div className="absolute -right-1/4 bottom-1/4 h-[min(100vw,50rem)] w-[min(100vw,50rem)] rounded-full bg-primary/10 blur-[150px] dark:bg-primary/8" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 cursor-default"
        >
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Projects"
            description="Showcasing excellence in every construction endeavor"
            centered
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'bg-background text-foreground/70 border border-border/50 hover:border-primary/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
