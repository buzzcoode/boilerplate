import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { UserAuthForm } from '@/app/auth/_components/SignIn'

export default function Page() {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-xl font-medium">Blendr</h1>
          </div>
          <Card className="p-6">
            <div className="flex flex-col space-y-3 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">
                Seja bem-vindo!
              </h1>
              <p className="text-sm text-muted-foreground">
                Para continuar, faça login na sua conta.
                <br />
                <br />
                Não tem uma conta?{' '}
                <Link
                  href="/auth/cadastro"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Criar conta
                </Link>
              </p>
            </div>
            <UserAuthForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              Clicando em fazer login, você concorda com os nossos{' '}
              <Link
                href="/termos"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de serviço
              </Link>{' '}
              e{' '}
              <Link
                href="/pricidade"
                className="underline underline-offset-4 hover:text-primary"
              >
                Políticas de privacidade
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
