import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { VerificationForm } from '@/app/auth/_components/VerificationForm'

export default function Verification() {
  return (
    <>
      <div className="container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <Card className="p-6">
            <div className="flex flex-col space-y-3 text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-center">
                Confirmar email
              </h1>
              <p className="text-sm text-muted-foreground text-center">
                Voltar para o{' '}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Login
                </Link>
              </p>
            </div>
            <VerificationForm />
          </Card>
        </div>
      </div>
    </>
  )
}
