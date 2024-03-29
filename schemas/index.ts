import * as z from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Digite seu email' })
    .email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(1, {
      message: 'Digite sua senha'
    })
    .min(1, {
      message: 'Senha deve ter pelo menos 1 caracter'
    }),
  code: z.optional(z.string())
})

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: 'Digite seu nome' }),
  email: z
    .string()
    .min(1, { message: 'Digite seu email' })
    .email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(1, {
      message: 'Digite sua senha'
    })
    .min(7, {
      message: 'Senha deve ter pelo menos 7 caracteres'
    })
})

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Digite seu email' })
    .email({ message: 'Email inválido' })
})

export const NewPasswordSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })
