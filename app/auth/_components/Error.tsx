'use client'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/custom/button'
import { cn } from '@/lib/utils'

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean
}

export const Error = ({ className, minimal = false }: GeneralErrorProps) => {
  const navigate = useRouter()
  return (
    <div className={cn('h-svh w-full', className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <ExclamationTriangleIcon className="text-destructive h-12 w-12" />
        )}
        <span className="font-medium">
          Oops! Alguma coisa deu errado {`:')`}
        </span>
        <p className="text-center text-muted-foreground">
          Pedimos desculpas pela inconvenência <br /> e estamos trabalhando
          nisso. Tente mais tarde
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button
              variant="outline"
              onClick={() => navigate.push('/auth/login')}
            >
              Voltar para o Login
            </Button>
            <Button onClick={() => navigate.push('/')}>
              Voltar para a Home
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
