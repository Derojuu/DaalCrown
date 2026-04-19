import type { Metadata } from 'next'
import { Barlow_Semi_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Daal Crown King Ltd — Construction, Infrastructure & Materials',
  description:
    'Engineering-led construction, rehabilitation, and materials delivery—modeled on global EPC excellence for ambitious projects.',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        className="font-sans overflow-x-hidden selection:bg-accent/20 selection:text-foreground"
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
