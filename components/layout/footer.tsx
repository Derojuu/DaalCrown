import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/common/theme-toggle'

const Footer = () => {
  const year = new Date().getFullYear()

  const cols = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Leadership', href: '#about' },
        { label: 'Careers', href: '#people' },
        { label: 'Insights', href: '#insights' },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { label: 'Construction', href: '#services' },
        { label: 'Rehabilitation', href: '#services' },
        { label: 'Materials', href: '#materials' },
        { label: 'Project delivery', href: '#services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Featured projects', href: '#projects' },
        { label: 'Client stories', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy', href: '#' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3.5 sm:gap-4">
              <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daal%20crown%20bg%20removed-JoSVsbnqjBqVSliTmKYONApuNPXWDZ.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 56px, 64px"
                />
              </div>
              <span className="font-heading text-xl font-bold uppercase tracking-[0.14em] sm:text-2xl">
                Daal Crown King Ltd
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              Extraordinary teams delivering complex construction, rehabilitation, and materials programs—with the
              discipline, safety culture, and delivery rigor you expect from a global EPC partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['in', '𝕏', 'f'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-xs font-bold uppercase transition hover:border-primary hover:bg-primary"
                  aria-label="Social link"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-end">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">{c.title}</h3>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm font-medium text-white/85 transition hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
          <p className="text-xs text-white/55">
            © {year} Daal Crown King Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-white/70">
            <Link href="#" className="hover:text-primary">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary">
              Cookies
            </Link>
            <div className="flex items-center gap-2 border-l border-white/15 pl-6 text-white [&_button]:text-white [&_button:hover]:bg-white/10 [&_svg]:text-white">
              <span className="text-white/50">Display</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
