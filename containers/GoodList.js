import React from 'react';
// import {connect} from 'react-redux';

import { List } from 'react-onsenui';

import Good from '../components/Good';

import {
  goods
} from '../data';

const GoodList = ({navigator}) => {
  return (
    <List
      style={{
        border: 'none'
      }}
      modifier='noborder'
      dataSource={goods}
      renderRow={(good) =>
        <Good
          style={{
            boxShadow: 'none'
          }}
          key={good.id}
          navigator={navigator}
          {...good}
          />
      }
      />
  );
};

export default GoodList;
