module.exports = {
  siteMetadata: {
    title: `Design Studio of Evan O'Neil`,

  },
  plugins: [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-postcss`,
  'gatsby-transformer-json',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'project',
      path: './src/data'
    }
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en'
    }
  }
]
}


