import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import Insights from '@/components/sections/insights'
import Services from '@/components/sections/services'
import ValuesStrip from '@/components/sections/values-strip'
import About from '@/components/sections/about'
import PeopleBand from '@/components/sections/people-band'
import BrandStory from '@/components/sections/brand-story'
import Legacy from '@/components/sections/legacy'
//import Projects from '@/components/sections/projects'
import Testimonials from '@/components/sections/testimonials'
import Materials from '@/components/sections/materials'
import CTA from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="relative z-[2] flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <Hero />
      <Insights />
      <Services />
      <ValuesStrip />
      <About />
      <PeopleBand />
      <BrandStory />
      <Legacy />
      {/*<Projects />*/}
      <Testimonials />
      <Materials />
      <CTA />
      <Footer />
    </main>
  )
}
