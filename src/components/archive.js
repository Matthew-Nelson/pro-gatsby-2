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
      <article key={edge.node.id}>
        <h3>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>
            {edge.node.frontmatter.title}
          </Link>
        </h3>
        <small>{edge.node.frontmatter.date}</small>
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
