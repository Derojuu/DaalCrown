'use client'

import Image from 'next/image'

const Showcase = () => {
  const showcaseItems = [
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Latest Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the impressive portfolio of projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        {/* Three Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8 group">
          <Image
            src="/images/team-workspace.jpg"
            alt="Our team at work"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center p-12 max-w-2xl">
            <h3 className="font-playfair text-4xl font-bold text-white mb-4">
              Expert Team, Exceptional Results
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Our dedicated professionals bring decades of combined expertise to every project, ensuring excellence at every stage.
            </p>
            <button className="w-fit px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <Image
              src="/images/project-residential.jpg"
              alt="Residential projects"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <Image
              src="/images/renovation.jpg"
              alt="Renovation services"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
