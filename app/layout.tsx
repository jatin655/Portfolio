import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jatin Sachdeva',
  description: 'My Portfolio',
  generator: 'Created by Me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
