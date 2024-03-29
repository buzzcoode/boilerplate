'use client'

import { useCurrentUser } from '@/hooks/use-current-user'
import { Button } from '@/components/ui/button'
import { logout } from '@/actions/logout'

export default function Page() {
  const user = useCurrentUser()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {JSON.stringify(user)}
      <div>
        <Button type="submit" className="w-full mt-12" onClick={handleLogout}>
          Sair
        </Button>
      </div>
    </div>
  )
}
