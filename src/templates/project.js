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
      secondlink
      url2title
      collaborators
      skills
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
  const skills = project.skills;
  const secondlink= project.secondlink;
  const url2title=project.url2title;
  const collaborators=project.collaborators

  return (
    <LayoutPage>
      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
        skills={skills}
        secondlink={secondlink}
        url2title={url2title}
        collaborators={collaborators}
      />
    </LayoutPage>
  );
};

export default ProjectTemplate;