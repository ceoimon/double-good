import React from 'react';

import {
  Page,
  Button,
  Icon
} from 'react-onsenui';

import NavBar from './NavBar';
// import LocationList from '../containers/LocationList';
import GoodList from '../containers/GoodList';

const styles = {
  cover: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    top: -44,
    left: 0
  },
  buttonWrapper: {
    width: '33.333333333%'
  },
  button: {
    background: 'white',
    width: '100%',
    color: 'black',
    borderRadius: 0,
    textAlign: 'center',
    fontSize: 'smaller'
  }
};

const Filter = () => (
  <div className='mainpage__filter'>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '180px',
      borderBottom: '1px solid rgb(255, 245, 245)'
    }}>
      <div style={styles.buttonWrapper}><Button style={styles.button}>默认 <Icon icon='fa-angle-down' /></Button></div>
      <div style={styles.buttonWrapper}><Button style={styles.button}>全部商圈 <Icon icon='fa-angle-down' /></Button></div>
      <div style={styles.buttonWrapper}><Button style={styles.button}>智能排序 <Icon icon='fa-angle-down' /></Button></div>
    </div>
  </div>
);

const MainPage = ({navigator}) => {
  return (
    <Page style={{overflow: 'visible'}}>
      <NavBar isHome={true} navigator={navigator} isNav={false} />
      <img src='https://scontent.xx.fbcdn.net/t31.0-8/10272602_872284742853144_5892743973248502447_o.jpg' style={styles.cover} />
      <div style={{
        position: 'absolute',
        top: '50px',
        left: 0,
        width: '100%',
        height: '215px',
        background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 245, 245, 0.5) 50%, rgba(255, 245, 245, 1) 100%)'
      }} ></div>
      <Filter />
      <GoodList navigator={navigator} />
    </Page>
  );
};

export default MainPage;
