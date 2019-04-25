module.exports = {
  siteMetadata: {
    title: `Design Studio of Evan O'Neil`,

  },
  plugins: [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-postcss`,
  'gatsby-transformer-json',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'project',
      path: './src/data'
    }
  }
]
}


