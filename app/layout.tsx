import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dishfolio',
  description: 'Custom restaurant menu built with Next.js...',
  openGraph: {
    title: 'Dishfolio',
    description: 'Custom restaurant menu...',
    url: 'https://dishfolio.gvasilei.com',
    type: 'website',
    images: [
      {
        url: 'https://dishfolio.gvasilei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dishfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dishfolio',
    description: 'Custom restaurant menu...',
    images: ['https://dishfolio.gvasilei.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white box-border`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
