'use client'

import { useState, useEffect } from 'react'
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
    <section id="testimonials" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            subtitle="Client Testimonials"
            title="What Our Clients Say"
            description="Real experiences from satisfied clients worldwide"
            centered
          />
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <GlassCard className="overflow-hidden">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-2xl text-primary">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-playfair text-2xl font-bold text-foreground leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                      {testimonials[currentSlide].image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[currentSlide].name}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {testimonials[currentSlide].role}
                      </p>
                      <p className="text-xs text-primary">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-3 rounded-lg glass hover:border-primary/40 transition-all"
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
                className="p-3 rounded-lg glass hover:border-primary/40 transition-all"
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
          <div className="grid grid-cols-3 gap-4 mt-16">
            {[
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '15+', label: 'Years in Business' },
              { stat: '500+', label: 'Projects Delivered' },
            ].map((item, index) => (
              <GlassCard key={index} className="text-center">
                <p className="font-playfair text-3xl font-bold text-primary">
                  {item.stat}
                </p>
                <p className="text-foreground/60 text-sm mt-2">{item.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
