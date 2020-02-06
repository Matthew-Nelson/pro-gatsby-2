import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Listing = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);

  const posts = allMarkdownRemark.edges.map(({ node }) => {
    return (
      <article
        key={node.id}
        style={{
          border: '2px solid #663399',
          marginBottom: '2rem',
          padding: '1rem',
        }}
      >
        <h3>
          <Link to={`/posts${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p>{node.excerpt}</p>
        <p style={{ marginBottom: '0' }}>
          <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
        </p>
      </article>
    );
  });

  return <div>{posts}</div>;
};

export default Listing;
