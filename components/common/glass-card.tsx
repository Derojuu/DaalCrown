import { HTMLAttributes, ReactNode } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

const GlassCard = ({ children, className = '', hover = true, ...props }: GlassCardProps) => {
  return (
    <div
      {...props}
      className={`glass rounded-xl p-6 ${
        hover ? 'hover:border-primary/40 hover:bg-white/10 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassCard
