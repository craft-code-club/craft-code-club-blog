import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ["300", "900"], subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Craft & Code Club - Blog',
  description: 'Explore code craft with experts in DDD, algorithms, and architecture. Join & grow!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
