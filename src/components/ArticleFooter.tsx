import React from 'react'
import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'

const ArticleFooter: React.FC = () => {
  return (
    <div>
      <hr />
      <div className="my-8 flex rounded-3xl bg-sky-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10">
        <div className="ml-4 flex-auto">
          <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
            Be part of the conversation
          </p>
          <p className="prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300">
            Join the{' '}
            <Link
              href="/institute-of-data-architecture/be-part-of-the-community"
              aria-label="Join the community"
            >
              community
            </Link>
            .
          </p>
          <div>
            <NewsletterSignup />
          </div>
          <p className="m-0 mt-8 font-display text-xl text-sky-900 dark:text-sky-400">
            Do you have an improvement?
          </p>

          <p className="prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300">
            Spotted a spelling error, discovered a bug, or have a new idea?
            Share your improvements with us.
          </p>
          <p className="prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300">
            Learn how to{' '}
            <Link
              href="/contribute-to-institute-of-data-architecture"
              aria-label="Learn How to Contribute to the Institute of Data Architecture."
            >
              contribute to Institute of Data Architecture
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleFooter
