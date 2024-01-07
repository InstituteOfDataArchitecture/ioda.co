import axios from 'axios'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = body.email

    if (!email || !email.length) {
      return NextResponse.json(
        { error: 'Please enter an email address' },
        { status: 400 },
      )
    }

    const { url, data, headers } = getRequestParams(email)

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email_address: data.email_address,
        status: data.status,
      }),
      headers,
    })

    if (!response.ok) {
      const errorData = await response.json()
      const error =
        errorData?.title === 'Member Exists'
          ? 'You have already subscribed to the newsletter!'
          : errorData?.title
      throw new Error(error || 'Unexpected error')
    }

    const responseData = await response.json()

    return NextResponse.json(
      { data: responseData.data || 'You have subscribed to the newsletter.' },
      { status: 200 },
    )
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Please try again!!' },
      { status: 400 },
    )
  }
}
function getRequestParams(email: string) {
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
  const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID

  const DATACENTER = API_KEY?.split('-')[1]
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  }

  return { url, data, headers }
}
