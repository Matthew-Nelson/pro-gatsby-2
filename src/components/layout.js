/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';

import Header from './header';
import Archive from './archive';
import './layout.css';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const MainLayout = styled.main`
  margin: 0 auto;
  @media only screen and (min-width: 900px) {
    max-width: 95%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
  }
`;

const FooterLayout = styled.footer`
  background: #524763;
  .container,
  a {
    color: white;
  }
  a:hover {
    font-size: 2rem;
  }
  &:hover {
    background: green;
  }
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const springProps = useSpring({
    from: { height: location.pathname === '/' ? 450 : 450 },
    to: { height: location.pathname === '/' ? 450 : 450 },
  });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <animated.div style={{ overflow: 'hidden', ...springProps }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>

      <Container>
        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
      </Container>
      <FooterLayout>
        <Container className="container">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Container>
      </FooterLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  location: {},
};

export default Layout;
