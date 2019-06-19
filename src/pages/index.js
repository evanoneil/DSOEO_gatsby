import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview'


export default () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject (sort: { order: ASC, fields: [ordersorter] }) {
        edges {
          node {
            title
            ordersorter
            description
            slug {
              current
            }
            skills
            image {
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

  const projects = data.allSanityProject.edges

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug.current;
        const imageData = project.image.asset.fluid;
        const skills = project.skills;
        const ordersorter = project.ordersorter

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
            skills={skills}
            ordersorter={ordersorter}
          />
        )
      })}
    </Layout>
  );
}
