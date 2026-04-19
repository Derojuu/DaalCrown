/**
 * Bechtel homepage lower-right hero motif: two ring segments from their wordmark circle,
 * recolored to Daal Crown gold (see Firecrawl branding / live site).
 */
export function HeroBechtelArc({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="dc-gold-arc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c547" />
          <stop offset="45%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#9a7b1a" />
        </linearGradient>
      </defs>
      <path
        fill="url(#dc-gold-arc)"
        d="M30.4618 3.71034C35.9038 3.71034 40.8422 5.85517 44.482 9.34881L48.325 7.99116C43.9343 3.08679 37.5602 0 30.4618 0C17.6342 0 7.161 10.0873 6.52051 22.7706L10.3591 21.4129C11.6268 11.4273 20.1432 3.71034 30.4618 3.71034Z"
      />
      <path
        fill="url(#dc-gold-arc)"
        d="M30.4613 44.2897C24.9707 44.2897 19.9881 42.1006 16.3395 38.5495L12.5098 39.9027C16.9005 44.869 23.3187 48 30.4657 48C43.3419 48 53.846 37.8375 54.4158 25.0879L50.5861 26.4411C49.3802 36.4931 40.8329 44.2852 30.4657 44.2852"
      />
    </svg>
  )
}
