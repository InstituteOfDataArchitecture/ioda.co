import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import GitHubFile from '@/components/GitHubFile'
import ArticleFooter from '@/components/ArticleFooter'
import NewsletterSignup from '@/components/NewsletterSignup'
import Upcoming from '@/components/Upcoming'
import ExternalLink from '@/components/ExternalLink'
import { Badge } from '@/components/Badge'
import { Training } from '@/components/Training'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  youtube: {
    selfClosing: true,
    attributes: {
      videoId: { type: String },
    },
    render: YouTubeEmbed,
  },
  githubfile: {
    selfClosing: false,
    attributes: {
      githubName: { type: String },
      repo: { type: String },
      branch: { type: String },
      filePath: { type: String },
      language: { type: String },
    },
    render: GitHubFile,
  },
  articlefooter: {
    selfClosing: true,
    attributes: {},
    render: ArticleFooter,
  },
  newslettersignup: {
    selfClosing: true,
    attributes: {},
    render: NewsletterSignup,
  },
  upcoming: {
    selfClosing: true,
    attributes: {},
    render: Upcoming,
  },
  external_link: {
    selfClosing: true,
    attributes: {
      url: { type: String },
      title: { type: String },
    },
    render: ExternalLink,
  },
  badge: {
    attributes: {},
    render: Badge,
  },
  training: {
    selfClosing: true,
    attributes: {
      title: { type: String },
      course: { type: String },
      lesson: { type: String },
      links_to: {
        type: String,
        default: 'training',
        matches: ['training', 'content'],
      },
      top_margin: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    render: Training,
  },
}

export default tags
