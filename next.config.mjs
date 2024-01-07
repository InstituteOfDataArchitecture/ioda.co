import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],

  // just remove the redirects() function to disable redirects
  async redirects() {
    return [
      {
        source: '/sql',
        destination: 'https://ioda.co',
        permanent: false,
      },
    ]
  },
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
