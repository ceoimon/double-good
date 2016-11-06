import React from 'react';

import { ListItem } from 'react-onsenui';
import GoodDetailPage from './GoodDetailPage';

const styles = {
  noUndeline: {
    backgroundImage: 'none'
  },
  thumbnail: {
    width: '80px',
    height: '60px'
  }
};

const Goods = ({thumbnail, id, name, time, navigator, timeAddition, pos, dis}) => (
  <ListItem onClick={() => {
    navigator.pushPage({component: GoodDetailPage, id, key: id});
  } } tappable>
    <div className='left'>
      <img src={thumbnail} style={styles.thumbnail} />
    </div>
    <div className='center' style={styles.noUndeline}>
      <div className='list__item__title'>
        {name}
      </div>
      <div className='list__item__subtitle'>
        {time}
        {timeAddition ? ` ${timeAddition}` : null}
      </div>
      <div className='list__item__subtitle'>
        {pos}
      </div>
    </div>
    <div className='right' style={styles.noUndeline}>
      <span style={{
        position: 'absolute',
        right: '10px',
        top: '12px',
        fontSize: 'small',
        color: '#FF3C6A'
      }}>{dis}</span>
    </div>
  </ListItem>
);

export default Goods;
