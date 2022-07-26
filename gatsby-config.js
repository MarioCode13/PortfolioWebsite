module.exports = {
  siteMetadata: {
    title: 'Mario Liebenberg',
    author: 'Mario Liebenberg',
    siteUrl: 'https://marioliebenberg.com',
    siteImage: '/static/assets/bg.jpg',
    description: 'Portfolio website of Mario Liebenberg',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
  ],
}
