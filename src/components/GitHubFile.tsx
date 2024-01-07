'use client'
import React, { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { Highlight } from 'prism-react-renderer'

interface CodeEmbedProps {
  /** GitHub username or organization name */
  githubName: string

  /** Repository name */
  repo: string

  /** Branch name in the repository */
  branch: string

  /** Path to the file within the repository */
  filePath: string

  /** Programming language for syntax highlighting */
  language: string
}

const CodeEmbed: React.FC<CodeEmbedProps> = ({
  githubName,
  repo,
  branch,
  filePath,
  language,
}) => {
  const [codeContent, setCodeContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${githubName}/${repo}/${branch}/${filePath}`,
        )
        if (response.ok) {
          const text = await response.text()
          setCodeContent(text)
        } else {
          setCodeContent('Error loading code.')
        }
      } catch (error) {
        setCodeContent('Error fetching code.')
      } finally {
        setLoading(false)
      }
    }

    fetchCode()
  }, [githubName, repo, branch, filePath])

  const viewPath = `https://github.com/${githubName}/${repo}/blob/${branch}/${filePath}`

  return (
    <div className="code-container">
      {loading ? (
        <p>Loading code...</p>
      ) : (
        <Highlight
          code={codeContent.trimEnd()}
          language={language}
          theme={{ plain: {}, styles: [] }}
        >
          {({ className, style, tokens, getTokenProps }) => (
            <pre className={className} style={style}>
              <Link
                target="_blank"
                href={viewPath}
                className="not-prose italic underline"
              >
                <div className="not-prose mb-1">{filePath}</div>
              </Link>

              <hr className="not-prose border-slate-800 pb-2" />
              <code>
                {tokens.map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {line
                      .filter((token) => !token.empty)
                      .map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    {'\n'}
                  </Fragment>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      )}
    </div>
  )
}

export default CodeEmbed
