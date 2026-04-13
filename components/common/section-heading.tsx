interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  centered?: boolean
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={`space-y-5 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <div className={`flex flex-wrap items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span
            className={`h-px bg-gradient-to-r from-transparent to-primary/50 ${centered ? 'w-10 sm:w-16' : 'w-16'}`}
            aria-hidden
          />
          <p className="eyebrow">{subtitle}</p>
          <span
            className={`h-px bg-gradient-to-l from-transparent to-primary/50 ${centered ? 'w-10 sm:w-16' : 'hidden'}`}
            aria-hidden
          />
        </div>
      )}
      <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.08] max-w-4xl mx-auto">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-sans">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
