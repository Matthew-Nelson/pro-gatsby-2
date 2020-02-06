import React from 'react';

import AstronautImage from '../components/astronautImage';
import Layout from '../components/layout';
import Listing from '../components/listing';

const IndexPage = () => (
  <Layout>
    <Listing />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <AstronautImage />
    </div>
  </Layout>
);

export default IndexPage;
