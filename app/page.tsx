import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Process from '@/components/sections/process'
import Materials from '@/components/sections/materials'
import Showcase from '@/components/sections/showcase'
import Projects from '@/components/sections/projects'
import Testimonials from '@/components/sections/testimonials'
import CTA from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="relative z-[2] min-h-screen overflow-x-hidden w-full flex flex-col">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Materials />
      <Showcase />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
