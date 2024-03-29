'use client'

import { HTMLAttributes, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandGoogle } from '@tabler/icons-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password'
import { cn } from '@/lib/utils'
import { LoginSchema } from '@/schemas'
import { login } from '@/actions/login'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email já em uso. Por favor, faca login com uma conta diferente.'
      : ''
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    setError('')
    setSuccess('')

    startTransition(() =>
      login(data)
        .then((data) => {
          if (data?.error) {
            form.reset()
            setError(data.error)
          }

          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => {
          setError('Alguma coisa deu errado!')
        })
    )
  }

  const onGoogleSignIn = (provider: 'google') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2 mt-3">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Código de confirmação</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        {...field}
                        disabled={isPending}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot className="w-[3.8rem]" index={0} />
                          <InputOTPSlot className="w-[3.8rem]" index={1} />
                          <InputOTPSlot className="w-[3.8rem]" index={2} />
                          <InputOTPSlot className="w-[3.8rem]" index={3} />
                          <InputOTPSlot className="w-[3.8rem]" index={4} />
                          <InputOTPSlot className="w-[3.8rem]" index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <div className="flex items-center justify-between">
                        <FormLabel>Senha</FormLabel>
                        <Link
                          href="/auth/esqueci-senha"
                          className="text-sm font-medium text-muted-foreground hover:opacity-75"
                        >
                          Esqueceu sua senha?
                        </Link>
                      </div>
                      <FormControl>
                        <PasswordInput
                          placeholder="********"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button className="mt-2" disabled={isPending}>
              {showTwoFactor ? 'Confirmar' : 'Entrar'}
            </Button>
            {!showTwoFactor && (
              <>
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Ou faça login com
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    type="button"
                    leftSection={<IconBrandGoogle className="h-4 w-4" />}
                    onClick={() => onGoogleSignIn('google')}
                  >
                    Google
                  </Button>
                </div>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
