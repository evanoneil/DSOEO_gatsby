import React from 'react';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layoutpage';
import Post from '../components/post';

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current :{eq: $slug }}) {
      title
      body
      _rawContent
      publishedAt
      categories
      mainImage {
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
  const project = data.sanityPost;
  const title = project.title;
  const description = project.body;
  const imageData = project.mainImage.asset.fluid;
  const url = project.url;
  const skills = project.skills;
  const secondlink= project.secondlink;
  const url2title=project.url2title;
  const collaborators=project.collaborators;
  const content=project._rawContent;
  const published=project.publishedAt;
  const category=project.categories

  return (
    <LayoutPage>
      <Post
        title={title}
        description={description}
        imageData={imageData}
        url={url}
        skills={skills}
        secondlink={secondlink}
        url2title={url2title}
        collaborators={collaborators}
        content={content}
        published={published}
        category={category}
      />
    </LayoutPage>
  );
};

export default ProjectTemplate;

