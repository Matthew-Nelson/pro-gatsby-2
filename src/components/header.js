import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';
import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
`;

const HeaderH1 = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderH1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <img
            style={{
              width: 'auto',
              height: '55px',
              marginRight: '10px',
            }}
            src={gatsbyLogo}
            alt=""
          />
          {siteTitle}
        </Link>
      </HeaderH1>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
