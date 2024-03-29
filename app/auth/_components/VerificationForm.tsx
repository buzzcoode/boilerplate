'use client'

import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'

import { verification } from '@/actions/verification'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

export const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('Token em falta!')
      return
    }

    verification(token)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
      .catch(() => {
        setError('Alguma coisa deu errado!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <div className="flex items-center justify-center w-full h-20">
      {!success && !error && <BeatLoader color="#E11D48" />}
      <FormSuccess message={success} />
      {!success && <FormError message={error} />}
    </div>
  )
}
