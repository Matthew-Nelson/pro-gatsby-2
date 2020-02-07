import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class teamLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <h2>BIKES</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.frontmatter.bio,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query TeamQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        bio
      }
    }
  }
`;
