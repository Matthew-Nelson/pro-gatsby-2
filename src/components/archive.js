import React from 'react';
import styled from 'styled-components';
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

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
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
      <ArchiveList>{posts}</ArchiveList>
    </div>
  );
}
