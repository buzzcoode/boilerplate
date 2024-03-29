import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { SignUpForm } from '@/app/auth/_components/SignUp'

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
                Crie sua conta na Blendr
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Crie uma conta na Blendr e agende cortes de cabelo com as
                melhores barbearias de Luanda.
                <br />
                <br />
                Já tem uma conta?{' '}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Fazer login
                </Link>
              </p>
            </div>
            <SignUpForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              Clicando em Cadastrar, você concorda com os nossos{' '}
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
