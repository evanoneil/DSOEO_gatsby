import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout-blog'
import BlogPreview from '../components/blog-preview'


export default () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
            body
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allSanityPost.edges

  return (
    <Layout>
      {posts.map(({ node: posts }) => {
        const title = posts.title;
        const body = posts.body;
        const slug = posts.slug.current;
        const imageData = posts.mainImage.asset.fluid;

        return (
          <BlogPreview
            title={title}
            description={body}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </Layout>
  );
}
