import React from 'react';
// import {connect} from 'react-redux';

import { List } from 'react-onsenui';

import Good from '../components/Good';

const addZero = num => num < 10 ? `0${num}` : `${num}`;

const genRandomTime = () => `${addZero(9 + Math.round(4 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}-${addZero(16 + Math.round(7 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}`;

const GoodList = ({navigator}) => {
  const goods = {
    g1: {
      id: 1,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '刘伯伯爱玉冰',
      time: genRandomTime(),
      timeAddition: '星期天公休',
      pos: '新北市板桥区捷运江子翠站出口附近'
    },
    g2: {
      id: 2,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '米粉汤阿嬷',
      time: genRandomTime(),
      pos: '新北市永和区文化路67巷（包公庙前）'
    },
    g3: {
      id: 3,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '陈阿姨红豆饼',
      time: genRandomTime(),
      pos: '高雄市大寮区凤林一路附近'
    },
    g4: {
      id: 4,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '罗大哥赏味咖啡',
      time: genRandomTime(),
      pos: '台北市中正区延平南路226号5楼之4'
    },
    g5: {
      id: 5,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '陈阿姨红豆饼',
      time: genRandomTime(),
      pos: '高雄市大寮区凤林一路附近'
    },
    g6: {
      id: 6,
      thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
      name: '米粉汤阿嬷',
      time: genRandomTime(),
      pos: '新北市永和区文化路67巷（包公庙前）'
    }
  };
  return (
    <List
      style={{
        border: 'none'
      }}
      modifier='noborder'
      dataSource={Object.keys(goods).map((key) => goods[key])}
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
