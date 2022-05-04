module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `blog.jnapolitano.io`,
    author: `Justin Napolitano`,
    description: `Well Researched Publications`,
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
