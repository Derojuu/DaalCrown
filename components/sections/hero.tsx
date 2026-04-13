'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth out the raw scroll values so parallax doesn't jitter on mobile
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Parallax effects
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Dynamic Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute -top-[20%] left-0 right-0 w-full h-[140%]"
      >
        <Image
          src="/images/hero-background.jpg"
          alt="Luxury construction project"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Adaptable Overlay: Fixed dark wash so text remains readable in light mode */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-colors duration-500" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center justify-center text-center mt-20 pb-24"
      >
        <div className="flex flex-col items-center space-y-8 w-full">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full dark:bg-primary/5 dark:border-primary/10"
          >
            <div className="w-5 h-5 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daal%20crown%20bg%20removed-JoSVsbnqjBqVSliTmKYONApuNPXWDZ.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold tracking-wide text-primary">Premium Excellence</span>
          </motion.div>

          {/* Main Typography */}
          <div className="space-y-2 md:space-y-4 w-full">
            <motion.div className="overflow-hidden py-2">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold text-white drop-shadow-md leading-[1.1] tracking-tight"
              >
                Build The
              </motion.h1>
            </motion.div>
            
            <motion.div className="overflow-hidden py-2">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold text-primary drop-shadow-md leading-[1.1] tracking-tight"
              >
                Future
              </motion.h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl xl:text-2xl text-white/80 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed mt-8"
            >
              Mastering the art of modern infrastructure, structural rehabilitation, and premium materials designed to stand the test of time.
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300">
              Browse Materials
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300">
              Start Project
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 z-20"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-primary/50 relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 w-full h-1/2 bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
