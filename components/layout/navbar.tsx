'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../common/theme-toggle'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsMobileMenuOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 inset-x-0 z-50 mx-auto max-w-6xl w-[calc(100%-2rem)]"
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between border border-border/50 bg-background/60 backdrop-blur-xl shadow-lg transition-colors">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daal%20crown%20bg%20removed-JoSVsbnqjBqVSliTmKYONApuNPXWDZ.png"
                alt="Daal Crown King Ltd Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline font-playfair text-xl font-bold text-foreground">
              DAAL CROWN
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
               <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold text-sm">
              Get In Touch
            </button>
          </div>

          {/* Mobile Toggles */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            >
              <span
                className={`w-6 h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 inset-x-4 z-40 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4 bg-background/80 backdrop-blur-2xl border border-border shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
