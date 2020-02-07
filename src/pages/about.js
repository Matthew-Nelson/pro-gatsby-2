import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="About Page" />
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue
          sodales risus, vitae rhoncus massa suscipit vitae. Quisque et mollis
          tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Morbi eu molestie nulla. Nam nec ligula eu nunc commodo feugiat. Donec
          at neque ullamcorper nulla imperdiet fermentum. Mauris viverra, orci
          auctor volutpat commodo, odio sapien faucibus diam, vitae posuere
          massa nisi eu velit. Donec placerat odio nec porta luctus. Mauris
          varius arcu non finibus laoreet. Quisque eu porttitor neque. Aliquam
          interdum feugiat nulla et efficitur. Etiam lacus ante, finibus non
          consequat id, vulputate ut erat. Nullam metus risus, ullamcorper in ex
          eget, blandit dapibus massa.
        </p>
      </div>
    </Layout>
  );
};

export default About;
