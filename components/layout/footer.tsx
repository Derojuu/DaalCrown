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
    <footer className="overflow-hidden border-t border-border/40 bg-muted/20 pb-12 pt-24 dark:bg-[#060606] md:pt-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-20 flex flex-col items-center justify-center text-center md:mb-28">
          <p className="eyebrow mb-6">Daal Crown King Ltd</p>
          <h2 className="mb-10 max-w-5xl font-playfair text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s{' '}
            <span className="text-gradient italic">
              Build.
            </span>
          </h2>
          <button className="rounded-full bg-primary px-12 py-5 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/25 transition-transform duration-300 hover:scale-[1.03] hover:bg-primary/90">
            Start Your Project
          </button>
        </div>

        {/* Footer Grid */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="pr-0 md:col-span-5 md:pr-8 lg:col-span-4">
            <h3 className="mb-6 font-playfair text-3xl font-bold tracking-tight text-primary">DAAL CROWN</h3>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Building excellence through innovation, integrity, and an unwavering commitment to quality structural development.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="font-bold">in</span>
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="font-bold">𝕏</span>
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="font-bold">f</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 lg:col-span-8 lg:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">{title}</h4>
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

        <div className="mb-8 border-t border-border/40" />

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
