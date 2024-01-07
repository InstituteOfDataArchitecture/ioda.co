import React from 'react'

export const Badge: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <span className="text-xxs inline-flex items-center rounded-full bg-blue-50 px-1.5 py-0.5 font-light text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:px-2 dark:py-1 dark:text-blue-400 dark:ring-blue-400/30">
      {children}
    </span>
  )
}
