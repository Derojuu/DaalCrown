import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
    ],
    Services: [
      { label: 'Construction', href: '#services' },
      { label: 'Infrastructure', href: '#services' },
      { label: 'Development', href: '#services' },
      { label: 'Consulting', href: '#services' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  }

  return (
    <footer className="bg-background border-t border-border/50 pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive CTA */}
        <div className="mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tighter mb-8">
            Let's <span className="text-primary italic">Build.</span>
          </h2>
          <button className="px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20">
            Start Your Project
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-5 lg:col-span-4 pr-8">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
              DAAL CROWN
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Building excellence through innovation, integrity, and an unwavering commitment to quality structural development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <span className="font-bold">in</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <span className="font-bold">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <span className="font-bold">f</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm uppercase tracking-widest font-semibold text-foreground mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Daal Crown King Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
