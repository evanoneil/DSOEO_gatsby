exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    {
      allSanityProject (sort: { order: ASC, fields: [ordersorter] }) {
        edges {
          node {
            ordersorter
            slug {
              current
            }
          }
        }
      }
      allSanityPost (sort: { order: ASC, fields: [publishedAt] }) {
        edges {
          node {
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
    
    `);
  
    if (result.error) {
      reporter.panic('There was a problem loading your projects!');
      return;
    }
  
    const projects = result.data.allSanityProject.edges;
  
    projects.forEach(({ node: project }) => {
      const slug = project.slug.current;
  
      actions.createPage({
        path: `/${slug}/`,
        component: require.resolve('./src/templates/project.js'),
        context: { slug }
      });
    });

    const posts = result.data.allSanityPost.edges;
  
    posts.forEach(({ node: post }) => {
      const slug = post.slug.current;
  
      actions.createPage({
        path: `/${slug}/`,
        component: require.resolve('./src/templates/post.js'),
        context: { slug }
      });
    });

    
  };
  