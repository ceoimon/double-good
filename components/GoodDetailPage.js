import React from 'react';

import NavBar from './NavBar';

import {
  Page
} from 'react-onsenui';

const GoodDetailPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar backButton={true} isHome={false} navigator={navigator} isNav={true} />}>
    Fuck
  </Page>
);

export default GoodDetailPage;
