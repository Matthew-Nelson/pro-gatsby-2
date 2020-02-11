const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

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
              }
            }
          }
        }
      }
    `).then(results => {
      if (results.errors) {
        results.errors.forEach(e => console.error(e.toString()));
        return reject(results.errors);
      }

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
          createPage({
            path: `/team${node.frontmatter.slug}`,
            component: path.resolve('./src/components/teamLayout.js'),
            context: {
              slug: node.frontmatter.slug,
            },
          });
        }
      });

      return resolve();
    });
  });
};
