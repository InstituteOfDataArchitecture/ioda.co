import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Institute of Data Architecture',
    default: 'Institute of Data Architecture',
  },
  description:
    'Empower your customers to make data-driven decisions, and harness the flexibility and resilience of modern data architecture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body>
        <i>
          <strong>
            Institute of Data Architecture's courses are currently being built.
            Sign up for our newsletter below to get notified when they are
            ready. 🎉
          </strong>
        </i>
        <div className="flex min-h-full bg-white dark:bg-slate-900">
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </div>
      </body>
    </html>
  )
}
