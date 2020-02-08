const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                page_type
                profile_picture
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.page_type === 'blog-post') {
          createPage({
            path: `/posts${node.frontmatter.slug}`,
            component: path.resolve('./src/components/postLayout.js'),
            context: {
              slug: node.frontmatter.slug,
            },
          });
        } else if (node.frontmatter.page_type === 'team-member') {
          const regexImagePath = `/${node.frontmatter.profile_picture ||
            'cat.jpg'}/`;

          createPage({
            path: `/team${node.frontmatter.slug}`,
            component: path.resolve('./src/components/teamLayout.js'),
            context: {
              slug: node.frontmatter.slug,
              profile_picture: regexImagePath,
            },
          });
        }
      });

      resolve();
    });
  });
};
