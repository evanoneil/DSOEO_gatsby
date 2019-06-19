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
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: '0xfk5i93',
      dataset: 'production'
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


