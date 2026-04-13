'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/common/section-heading'
import GlassCard from '@/components/common/glass-card'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'James Richardson',
      role: 'CEO, TechCorp Industries',
      company: 'Fortune 500 Company',
      text: 'Daal Crown King delivered our corporate headquarters with exceptional attention to detail. The project was completed ahead of schedule and exceeded all our expectations.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Property Developer',
      company: 'Premium Estates',
      text: 'Outstanding team with remarkable professionalism. Every milestone was met with precision. Highly recommend for any ambitious construction project.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      role: 'Government Official',
      company: 'Municipal Development',
      text: 'Their infrastructure project transformed our city. The quality of work and commitment to sustainability impressed everyone involved.',
      rating: 5,
      image: '👨‍💻',
    },
    {
      id: 4,
      name: 'Emma Thompson',
      role: 'Residential Client',
      company: 'Private Investor',
      text: 'Built our dream home exactly as we imagined. The team was responsive, professional, and delivered exceptional quality throughout.',
      rating: 5,
      image: '👩‍🦰',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section id="testimonials" className="section-y relative overflow-hidden bg-background">
      <div className="section-ambient">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/8 blur-[100px] dark:bg-primary/6" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-20">
          <SectionHeading
            subtitle="Client Testimonials"
            title="What Our Clients Say"
            description="Real experiences from satisfied clients worldwide"
            centered
          />
        </div>

        {/* Testimonial Carousel */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <GlassCard className="overflow-hidden rounded-3xl border-border/50 bg-card/80 p-8 md:p-12 dark:bg-card/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentSlide].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-2xl text-primary">
                        ★
                      </span>
                    ))}
                  </div>

                  <blockquote className="font-playfair text-2xl font-bold leading-snug text-foreground md:text-3xl">
                    &ldquo;{testimonials[currentSlide].text}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between border-t border-border/60 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-3xl ring-2 ring-primary/20">
                        {testimonials[currentSlide].image}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonials[currentSlide].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentSlide].role}</p>
                        <p className="text-xs font-medium text-primary">{testimonials[currentSlide].company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="glass rounded-xl p-3 transition-all hover:border-primary/40 active:scale-95"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="glass rounded-xl p-3 transition-all hover:border-primary/40 active:scale-95"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Below Carousel */}
          <div className="mt-16 grid grid-cols-3 gap-3 md:gap-4">
            {[
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '15+', label: 'Years in Business' },
              { stat: '500+', label: 'Projects Delivered' },
            ].map((item, index) => (
              <GlassCard key={index} className="rounded-2xl border-border/40 bg-card/60 px-3 py-6 text-center dark:bg-card/30">
                <p className="font-playfair text-2xl font-bold text-primary tabular-nums md:text-3xl">{item.stat}</p>
                <p className="mt-2 text-xs text-muted-foreground md:text-sm">{item.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
