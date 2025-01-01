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
  description: 'Solutions Architect, Information Systems Student.',
  icons: {
    icon: '/images/favicon.ico',
  },
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

