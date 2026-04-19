'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import ThemeToggle from '../common/theme-toggle'

/* Mirrors Bechtel.com primary nav labels (Firecrawl); anchors map to our page sections */
const NAV = [
  { label: 'People', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#services' },
  { label: 'Careers', href: '#people' },
  { label: 'Suppliers', href: '#materials' },
  { label: 'Media', href: '#insights' },
  { label: 'Impact', href: '#brand' },
  { label: 'History', href: '#history' },
] as const

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex h-[4.25rem] max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
          <Link
            href="#"
            className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daal%20crown%20bg%20removed-JoSVsbnqjBqVSliTmKYONApuNPXWDZ.png"
                alt="Daal Crown King Ltd"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.14em] text-[#30454C] sm:text-base">
              Daal Crown
            </span>
          </Link>

          <nav
            className="hidden max-w-[52rem] flex-1 flex-wrap items-center justify-center gap-x-0.5 lg:flex 2xl:max-w-none 2xl:gap-x-1"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <button suppressHydrationWarning
                key={item.href}
                type="button"
                className="flex items-center gap-0.5 px-1.5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#30454C] transition hover:text-[#1a1f24] xl:px-2 xl:text-[11px] xl:tracking-[0.12em]"
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
                <ChevronDown className="h-3 w-3 shrink-0 opacity-45" aria-hidden />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button suppressHydrationWarning
              type="button"
              className="hidden h-10 w-10 items-center justify-center text-[#30454C] transition hover:bg-muted lg:flex"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button suppressHydrationWarning
              type="button"
              className="btn-corporate hidden px-4 py-2.5 text-[11px] tracking-[0.14em] md:inline-flex"
              onClick={() => scrollTo('#contact')}
            >
              Contact
            </button>
            <button suppressHydrationWarning
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-border text-[#30454C] lg:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#30454C]/35 backdrop-blur-sm xl:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="fixed left-3 right-3 top-[4.5rem] z-50 max-h-[min(80vh,calc(100vh-5rem))] overflow-y-auto border border-border bg-background shadow-xl lg:hidden"
            >
              <nav className="flex flex-col p-4">
                {NAV.map((item) => (
                  <button suppressHydrationWarning
                    key={item.href}
                    type="button"
                    className="flex items-center justify-between border-b border-border/70 py-3.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-[#30454C]"
                    onClick={() => {
                      setOpen(false)
                      scrollTo(item.href)
                    }}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" aria-hidden />
                  </button>
                ))}
                <button suppressHydrationWarning
                  type="button"
                  className="btn-corporate mt-4 w-full py-3.5 text-[12px]"
                  onClick={() => {
                    setOpen(false)
                    scrollTo('#contact')
                  }}
                >
                  Contact
                </button>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Display</span>
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
