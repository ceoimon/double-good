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

const Goods = ({id, name, time, navigator, timeAddition, pos}) => (
  <ListItem onClick={() => {
    // actions.selectGood(id);
    navigator.pushPage({component: GoodDetailPage});
  } } tappable>
    <div className='left'>
      <img src='http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg' style={styles.thumbnail} />
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
        color: '#ff93af'
      }}>300m</span>
    </div>
  </ListItem>
);

export default Goods;
