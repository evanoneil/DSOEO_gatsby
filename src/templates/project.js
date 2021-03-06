import React from 'react';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layoutpage';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current :{eq: $slug }}) {
      title
      description
      ordersorter
      url
      secondlink
      url2title
      collaborators
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
`;

const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject;
  const title = project.title;
  const description = project.description;
  const imageData = project.image.asset.fluid;
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