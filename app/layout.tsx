import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './(admin)/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SearchWithNextJs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* this will be displayed over all children */}
        <Header/> 
        {children}
        </body>
    </html>
  )
}
