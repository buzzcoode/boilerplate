import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button size="lg" asChild>
        <Link href={'/auth/login'}>Boilerplate</Link>
      </Button>
    </main>
  )
}
