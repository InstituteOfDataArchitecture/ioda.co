import React from 'react'
import Link from 'next/link'

interface ExternalLinkProps {
  title: string
  url: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ title, url }) => {
  const href: string = 'https://'.concat(url)

  return (
    <Link href={href} target="_blank" aria-label={title}>
      {title}
    </Link>
  )
}

export default ExternalLink
