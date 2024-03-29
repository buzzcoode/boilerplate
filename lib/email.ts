import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Your 2FA token',
    html: `<p>Your two factor token is: ${token}</p>`
  })
}
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http:localhost:3000/auth/nova-senha?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Please reset your password by clicking: <a href="${resetLink}">here</a> to reset password</p>`
  })
}
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http:localhost:3000/auth/verificacao?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Please confirm your account',
    html: `<p>Please confirm your account by clicking: <a href="${confirmLink}">here</a> to continue</p>`
  })
}
