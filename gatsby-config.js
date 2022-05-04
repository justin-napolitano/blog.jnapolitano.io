module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `blog.jnapolitano`,
    author: `Justin Napolitano`,
    description: `Research on Energy, Policy, and the Environment`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/just-napolitano`,
      },
      {
        name: `github`,
        url: `https://github.com/justin-napolitano`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
