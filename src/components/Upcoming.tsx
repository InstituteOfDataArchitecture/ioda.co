import React from 'react'
import NewsletterSignup from '@/components/NewsletterSignup'

const Upcoming: React.FC = () => {
  return (
    <div>
      <hr />
      <div className="my-8 flex rounded-3xl bg-sky-50 p-6 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10">
        <div className="ml-4 flex-auto">
          <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
            Under development, sign up for the newsletter to get notified when
            it is ready.
          </p>

          <div>
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
