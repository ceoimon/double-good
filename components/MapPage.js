import React from 'react';

import {
  Page,
  Icon
} from 'react-onsenui';

import NavBar from './NavBar';

import {
  goods
} from '../data';

const BasicInfo = ({id = 1}) => (
  <div className='gdp__basicinfo__container mp'>
    <h3 className='gdp__basicinfo__title'>{goods[id - 1].name}</h3>
    <p><Icon icon='fa-clock-o' />&nbsp;{goods[id - 1].time}{goods[id - 1].timeAddition ? ` ${goods[id - 1].timeAddition}` : null}</p>
    <p><Icon icon='fa-map-marker' style={{
      width: '12px',
      textAlign: 'center'
    }} />&nbsp;{goods[id - 1].pos}</p>
    <span className='gdp__basicinfo__dis'>{goods[id - 1].dis}</span>
    <button className='go__there fab'><div className='go__there__inner'><Icon icon='md-walk' /><span>到这去</span></div></button>
  </div>
);

const MainPage = ({navigator, id}) => {
  return (
		<Page>
			<NavBar backButton={true} isFixed={true} navigator={navigator} isDetail={true} />
			<Page>
				<img className='mappage__fullscreen-map' src={goods[id - 1].map} />
			</Page>
			<BasicInfo id={id} />
		</Page>
  );
};

export default MainPage;
