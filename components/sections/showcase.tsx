'use client'

import Image from 'next/image'
import { useScrollActive } from '@/hooks/use-scroll-active'

type ShowcaseItem = {
  image: string
  title: string
  description: string
}

function ShowcaseTile({ item }: { item: ShowcaseItem }) {
  const { ref, isInView } = useScrollActive()
  return (
    <div
      ref={ref}
      data-mobile-active={isInView}
      className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-110 group-data-[mobile-active=true]:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 group-data-[mobile-active=true]:bg-black/40 transition-colors duration-300" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 group-data-[mobile-active=true]:translate-y-0 transition-transform duration-300">
        <h3 className="font-playfair text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/90 text-sm">{item.description}</p>
      </div>
    </div>
  )
}

function ShowcaseWide() {
  const { ref, isInView } = useScrollActive()
  return (
    <div
      ref={ref}
      data-mobile-active={isInView}
      className="group relative mb-8 h-96 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
    >
      <Image
        src="/images/team-workspace.jpg"
        alt="Our team at work"
        fill
        className="object-cover group-hover:scale-105 group-data-[mobile-active=true]:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center p-12 max-w-2xl">
        <h3 className="font-playfair text-4xl font-bold text-white mb-4">Expert Team, Exceptional Results</h3>
        <p className="text-white/90 text-lg mb-6 leading-relaxed">
          Our dedicated professionals bring decades of combined expertise to every project, ensuring excellence at every
          stage.
        </p>
        <button className="w-fit px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}

function ShowcaseHalf({ src, alt }: { src: string; alt: string }) {
  const { ref, isInView } = useScrollActive()
  return (
    <div
      ref={ref}
      data-mobile-active={isInView}
      className="group relative h-64 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-110 group-data-[mobile-active=true]:scale-110 transition-transform duration-500"
      />
    </div>
  )
}

const Showcase = () => {
  const showcaseItems: ShowcaseItem[] = [
    {
      image: '/images/project-commercial.jpg',
      title: 'Commercial Excellence',
      description: 'State-of-the-art office developments',
    },
    {
      image: '/images/renovation.jpg',
      title: 'Interior Renovation',
      description: 'Luxury space transformations',
    },
    {
      image: '/images/infrastructure.jpg',
      title: 'Infrastructure Solutions',
      description: 'Large-scale infrastructure projects',
    },
  ]

  return (
    <section className="section-y relative overflow-hidden bg-muted/20 dark:bg-muted/5">
      <div className="section-ambient">
        <div className="absolute top-1/2 left-1/2 h-[min(90vw,40rem)] w-[min(90vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/[0.04]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:mb-20">
          <p className="eyebrow mb-4">Portfolio</p>
          <h2 className="font-playfair text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Our Latest Works
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-muted-foreground">
            Discover the impressive portfolio of projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <ShowcaseTile key={index} item={item} />
          ))}
        </div>

        <ShowcaseWide />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseHalf src="/images/project-residential.jpg" alt="Residential projects" />
          <ShowcaseHalf src="/images/renovation.jpg" alt="Renovation services" />
        </div>
      </div>
    </section>
  )
}

export default Showcase
