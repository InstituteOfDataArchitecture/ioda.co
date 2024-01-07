'use client'
import axios from 'axios'
import React, { FormEventHandler, useEffect, useState } from 'react'

interface IError {
  error: string | undefined
}
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<String | null>()
  const [error, setError] = useState<IError>()
  const [success, setSuccess] = useState<boolean>()
  const handleSubmit = async (e: any) => {
    setError({ error: undefined })
    setSuccess(false)
    e.preventDefault()
    if (!email) {
      return
    }
    try {
      const res = await axios.post('/api/newsletter', { email })
      setSuccess(true)
      setEmail('')
    } catch (e: any) {
      setError(e.response?.data as IError)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (success || error) {
        setSuccess(false)
      }
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [success, error])

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <p className="mb-2 mt-2.5 font-display text-base text-slate-900 dark:text-white">
        Sign up for the newsletter:
      </p>
      <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value as string)
          }}
          value={email as string}
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Subscribe
        </button>
      </div>
      {Boolean(success) && (
        <p className="mt-4 text-sm leading-6 text-slate-500">
          You are now subscribed to the newsletter 🎉
        </p>
      )}
      {Boolean(error?.error) && (
        <p className="mt-4 text-sm leading-6 text-red-900">
          {'An error occurred, please send a message to'}{' '}
          <a href="mailto:support@ioda.co">support@ioda.co</a>
        </p>
      )}
    </form>
  )
}

export default NewsletterSignup
