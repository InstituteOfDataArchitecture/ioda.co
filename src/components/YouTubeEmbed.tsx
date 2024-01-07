import React from 'react'

interface YouTubeEmbedProps {
  videoId: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`

  return (
    <div className="relative max-w-full overflow-hidden bg-black pt-[56.25%]">
      <iframe
        className="absolute left-0 top-0 h-full w-full border-0"
        src={embedUrl}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTubeEmbed
