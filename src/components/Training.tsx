import React from 'react'
import Link from 'next/link'
import slugify from '@sindresorhus/slugify'

type TrainingProps = {
  title: string
  course: string
  lesson: string
  links_to: 'training' | 'content'
  top_margin?: boolean
}

export const Training: React.FC<TrainingProps> = ({
  title,
  course,
  lesson,
  links_to,
  top_margin,
}) => {
  let lesson_path: string
  if (links_to === 'training') {
    lesson_path = 'training'
  } else {
    lesson_path = lesson
  }

  const title_anchor = slugify(title)

  const path = `/${course}/${lesson_path}#${title_anchor}`
  return (
   <div className={`inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10  dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30 ${top_margin ? 'mt-2' : ''}`}>
  
      <Link
        id={links_to === 'training' ? title_anchor : undefined}
        className="not-prose"
        aria-label={title}
        href={path}
      >
        <b>{links_to === 'training' ? 'Go to training:' : 'Go to content:'}</b>{' '}
        {title}
      </Link>
    </div>
  )
}
