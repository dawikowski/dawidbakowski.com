import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dawid Bakowski - Solution Architect & Student',
  description: 'Solution Architect, Information Systems (CS & Business) Student.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://dawidbakowski.com',
    title: 'Dawid Bakowski - Solution Architect & Student',
    description: 'Solution Architect, Information Systems (CS & Business) Student.',
    siteName: 'Dawid Bakowski',
    images: [{
      url: '/images/og-picture.jpg',
      width: 1200,
      height: 630,
      alt: 'Dawid Bakowski - Solution Architect & Student'
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawid Bakowski - Solution Architect & Student',
    description: 'Solution Architect, Information Systems (CS & Business) Student.',
    images: ['/images/og-picture.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Dawid Bakowski' }],
  publisher: 'Dawid Bakowski',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={robotoMono.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dawid Bakowski",
              "description": "Solution Architect, Information Systems (CS & Business) Student.",
              "url": "https://dawidbakowski.com"
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

