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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notebooks`,
        path: `${__dirname}/content/posts/`,
        ignore: [`**/.ipynb_checkpoints`],
      },
    },
    {
      resolve: `@rafaelquintanilha/gatsby-transformer-ipynb`,
      options: {
        notebookProps: {
          displayOrder: ["image/png", "text/html", "text/plain"],
          showPrompt: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog.jnapolitano.io`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/favicons/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
}

