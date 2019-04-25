import React from 'react';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layoutpage';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const title = project.title;
  const description = project.description;
  const imageData = project.image.childImageSharp.fluid;
  const url = project.url;

  return (
    <LayoutPage>
      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
      />
    </LayoutPage>
  );
};

export default ProjectTemplate;