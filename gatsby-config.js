module.exports = {
  siteMetadata: {
    title: `SalesJump - WhatsApp Chat For Squarespace`,
    description: `WhatsApp Chat For Squarespace`,
    author: `@SalesJump`,
    siteUrl: 'https://salesjump.xyz'
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00b7c2`,
        theme_color: `#00b7c2`,
        display: `minimal-ui`,
        icon: `src/images/arrow.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://salesjump.xyz',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
}
