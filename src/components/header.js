import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

const HeaderH1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  .gatsby-image-wrapper {
    width: 55px;
    height: auto;
    margin-right: 10px;
  }
`;

const LOGO_QUERY = graphql`
  query logoQuery {
    file(relativePath: { regex: "/gatsby-icon/" }) {
      childImageSharp {
        fluid(maxWidth: 55) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  const { file } = useStaticQuery(LOGO_QUERY);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderH1>
          <StyledLink to="/">
            <div className="gatsby-iamge-wrapper">
              <Img fluid={file.childImageSharp.fluid} fadeIn={false} />
            </div>
            <div>{siteTitle}</div>
          </StyledLink>
        </HeaderH1>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
