import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProfileImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  &:after {
    // content: '';
    // display: block;
    // padding-bottom: 50%;
  }
`;
export default class teamLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    console.log(this.props.data);

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <ProfileImageWrapper>
          <Img
            fluid={
              markdownRemark.frontmatter.profile_picture.childImageSharp.fluid
            }
            style={{ height: '250px' }}
          />
        </ProfileImageWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query TeamQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        profile_picture {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
