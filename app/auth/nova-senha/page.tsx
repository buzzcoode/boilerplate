import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { NewPassword } from '@/app/auth/_components/NewPassword'

export default function Page() {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-xl font-medium">Blendr</h1>
          </div>
          <Card className="p-6">
            <div className="flex flex-col space-y-3 text-left mb-2">
              <h1 className="text-2xl font-semibold tracking-tight">
                Criar nova senha
              </h1>
              <p className="text-sm text-muted-foreground">
                Criar uma nova senha para sua conta.
                <br />
                Voltar para o{' '}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Login
                </Link>
              </p>
            </div>
            <NewPassword />
          </Card>
        </div>
      </div>
    </>
  )
}
