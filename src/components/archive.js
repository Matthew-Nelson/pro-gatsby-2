import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          id
        }
      }
    }
  }
`;

export default function Archive() {
  const data = useStaticQuery(POST_ARCHIVE_QUERY);

  const posts = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li key={edge.node.id}>
        <Link to={`/posts${edge.node.frontmatter.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h2>Archive</h2>
      <ul>{posts}</ul>
    </div>
  );
}
