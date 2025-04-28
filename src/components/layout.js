import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Mario Liebenberg Personal Web Site',
              },
              { name: 'keywords', content: 'Mario Liebenberg, personal' },
              // Add Content-Security-Policy here
              {
                httpEquiv: 'Content-Security-Policy',
                content: `
        default-src 'self';
        script-src 'self' https://apis.google.com https://www.google-analytics.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.small.chat/messenger.css https://github.com https://api.bitbucket.org https://secure.gravatar.com https://media-library.cloudinary.com https://identity.netlify.com https://res.cloudinary.com https://static.doubleclick.net https://widget.cloudinary.com https://www.youtube.com https://youtube.de https://twitter.com https://*.twimg.com;
        style-src-elem 'self' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' https://media-library.cloudinary.com https://res.cloudinary.com https://static.doubleclick.net https://www.youtube.com https://youtube.de https://secure.gravatar.com;
        connect-src 'self' https://www.google-analytics.com https://identity.netlify.com;
        frame-src https://www.youtube.com https://www.google.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
      `,
              },
            ]}
          >
            <link
              rel="sitemap"
              type="application/xml"
              title="Sitemap"
              href="/sitemap.xml"
            />
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
