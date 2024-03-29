import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { ForgotForm } from '@/app/auth/_components/Forgot'

export default function ForgotPassword() {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-xl font-medium">Blendr</h1>
          </div>
          <Card className="p-6">
            <div className="mb-2 flex flex-col space-y-2 text-left">
              <h1 className="text-md font-semibold tracking-tight">
                Esqueceu sua senha?
              </h1>
              <p className="text-sm text-muted-foreground">
                Digite o seu email registrado e <br /> nós lhe enviaremos um
                link para redefinir a sua senha.
              </p>
            </div>
            <ForgotForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              Não tem uma conta?{' '}
              <Link
                href="/auth/cadastro"
                className="underline underline-offset-4 hover:text-primary"
              >
                Criar conta
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
