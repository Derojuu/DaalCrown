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
    <div className={`space-y-2 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-widest">
          {subtitle}
        </p>
      )}
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto pt-2">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
