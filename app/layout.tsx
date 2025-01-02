import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dawid Bakowski - Solutions Architect & Student',
  description: 'Solutions Architect, Information Systems (CS & Business) Student.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://dawidbakowski.com',
    title: 'Dawid Bakowski - Solutions Architect & Student',
    description: 'Solutions Architect, Information Systems (CS & Business) Student.',
    siteName: 'Dawid Bakowski',
    images: [{
      url: '/images/websitelogo.jpg',
      width: 1200,
      height: 630,
      alt: 'Dawid Bakowski - Solutions Architect & Student'
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawid Bakowski - Solutions Architect & Student',
    description: 'Solutions Architect, Information Systems (CS & Business) Student.',
    images: ['/images/websitelogo.jpg'],
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

