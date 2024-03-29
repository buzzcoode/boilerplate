import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boilerplate'
}

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return <main>{children}</main>
}
