import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import { auth } from '@/auth'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Boilerplate',
  description: 'Create your next boilerplate with the most easy and clean code',
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" storageKey="blendr-theme">
        <html lang="pt">
          <body className={`${inter.className} dark`}>{children}</body>
        </html>
      </ThemeProvider>
    </SessionProvider>
  )
}
