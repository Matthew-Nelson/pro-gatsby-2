import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function Archive() {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
            }
            excerpt
            id
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map(edge => {
    return (
      <article key={edge.node.id}>
        <h3>
          <Link to={edge.node.frontmatter.slug}>
            {edge.node.frontmatter.title}
          </Link>
        </h3>
        <p>{edge.node.excerpt}</p>
      </article>
    );
  });

  return (
    <div>
      <h2>Here is our archive</h2>
      {posts}
    </div>
  );
}
