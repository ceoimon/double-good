import React from 'react';

import NavBar from './NavBar';

import {
  Page,
  Carousel,
  CarouselItem,
  Icon,
  Button
} from 'react-onsenui';

import MapPage from './MapPage';

import {
  goods
} from '../data';

const styles = {
  cover: {
    position: 'absolute',
    width: '100%',
    height: '300px',
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

const fakeData = [[
  'images/carousel01.jpg',
  'images/carousel02.jpg',
  'images/carousel03.jpg',
  'images/carousel05.jpg',
  'images/carousel04.jpg'
], [
  'images/carousel02.jpg',
  'images/carousel01.jpg',
  'images/carousel03.jpg',
  'images/carousel04.jpg',
  'images/carousel05.jpg'
], [
  'images/carousel03.jpg',
  'images/carousel05.jpg',
  'images/carousel01.jpg',
  'images/carousel02.jpg',
  'images/carousel04.jpg'
], [
  'images/carousel02.jpg',
  'images/carousel04.jpg',
  'images/carousel01.jpg',
  'images/carousel03.jpg',
  'images/carousel05.jpg'
]];

class TheCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleChange(e) {
    this.setState({ index: e.activeIndex });
  }

  setIndex(index) {
    this.setState({ index: index });
  }

  render() {
    const id = this.props.id || 1;
    return (
      <div>
        <Carousel onPostChange={this.handleChange.bind(this)} style={{ height: '300px' }} index={this.state.index} className='gooddetail__carousel' swipeable autoScroll overscrollable>
          {fakeData[id - 1].map((item, index) => (
            <CarouselItem key={index}>
              <img src={item} style={styles.cover} />
            </CarouselItem>
          ))}
        </Carousel>
        <div style={{
          textAlign: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '170px'
        }}>
          {fakeData[id - 1].map((item, index) => (
            <span key={index} className={`${this.state.index === index ? 'gooddetail__carousel__active' : 'gooddetail__carousel__inactive'} gooddetail__carousel__controller`} style={{ cursor: 'pointer' }} onClick={this.setIndex.bind(this, index)}>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

const BasicInfo = ({navigator, id = 1}) => (
  <div onClick={() => {
    navigator.pushPage({component: MapPage, id, key: id * 1024});
  }} className='gdp__basicinfo__container'>
    <h3 className='gdp__basicinfo__title'>{goods[id - 1].name}</h3>
    <p><Icon icon='fa-clock-o' />&nbsp;{goods[id - 1].time}{goods[id - 1].timeAddition ? ` ${goods[id - 1].timeAddition}` : null}</p>
    <p><Icon icon='fa-map-marker' style={{
      width: '12px',
      textAlign: 'center'
    }} />&nbsp;{goods[id - 1].pos}</p>
    <span className='gdp__basicinfo__dis'>{goods[id - 1].dis}</span>
    <button onClick={() => {
      navigator.pushPage({component: MapPage, id, key: id * 1024});
    }} className='go__there fab'><div className='go__there__inner'><Icon icon='md-walk' /><span>到这去</span></div></button>
  </div>
);

const Story = ({id = 1}) => (
  <div className='gdp__container'>
    <h4 className='gdp__title'>故事</h4>
    <div className='gdp__story__para'>
      {
        goods[id - 1].story.map((p, i) => (<p key={i}>{p}</p>))
      }
    </div>
  </div>
);

const Comment = ({profile, name, comm, time}) => (
  <div className='gdp__comment__item'>
    <img src={profile} alt='name' className='gdp__comment__profile'/>
    <div className='gdp__comment__content'>
      <span className='gdp__comment__name'>{name}</span>
      <p>{comm}</p>
    </div>
    <span className='gdp__comment__time'>{time}</span>
  </div>
);

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAll: false
    };
  }

  handleClick() {
    this.setState({
      displayAll: !this.state.displayAll
    });
  }

  render() {
    const id = this.props.id || 1;
    const { displayAll } = this.state;
    return (
      <div className='gdp__container'>
        <h4 className='gdp__title'>网友留言</h4>
        <div className='gdp__comment_container'>
          {
            displayAll
              ? goods[id - 1].comments.map((p, i) => (<Comment key={i} {...p}></Comment>))
              : goods[id - 1].comments.slice(0, 3).map((p, i) => (<Comment key={i} {...p}></Comment>))
          }
        </div>
        <Button modifier='quiet' onClick={this.handleClick.bind(this)} className='gdp__comment__expand'>{displayAll ? '收起' : '展开全部留言'} <Icon icon={displayAll ? 'fa-angle-up' : 'fa-angle-down'} /></Button>
      </div>
    );
  }
}

const QRcode = ({id = 1, closeClick}) => (
  <div className='gdp__qrcode__container'>
    <div className='gdp__qrcode__centre'>
      <p className='little-title'>微信扫一扫</p>
      <p className='slogan'>关注{goods[id - 1].person}的微信群，支持他自助</p>
      <img src={goods[id - 1].qrcode} alt='无法显示二维码' />
    </div>
    <button className='gdp__qrcode__confirm' onClick={closeClick}>知道啦</button>
    <button onClick={closeClick} className='gdp__qrcode__close hairline'></button>
  </div>
);

class FuncTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({
      isOpen: true
    });
  }

  handleClose() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const {id} = this.props;
    return (
      <div>
        <div style={{
        }} className='gdp__functab__container tab-bar ons-tab-bar__footer ons-tabbar-inner'>
          <div onClick={this.handleClick.bind(this)} label='打卡' icon='md-assignment-check' className='tab-bar__item active'>
            <input type='radio' style={{display: 'none'}} />
            <button className='tab-bar__button'>
              <div className='tab-bar__icon'>
                <ons-icon icon='md-assignment-check' className='ons-icon zmdi zmdi-assignment-check'></ons-icon>
              </div>
              <div className='tab-bar__label'>关注</div>
            </button>
          </div>
          <div label='写留言' icon='md-comment' className='tab-bar__item active'>
            <input type='radio' style={{display: 'none'}} />
            <button className='tab-bar__button'>
              <div className='tab-bar__icon'>
                <ons-icon icon='md-comment' className='ons-icon zmdi zmdi-comment'></ons-icon>
              </div>
              <div className='tab-bar__label'>写留言</div>
            </button>
          </div>
        </div>
        <div onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }} className={`gdp__funcbar__mask ${this.state.isOpen ? 'show' : 'hide'}`} ></div>
        {
          this.state.isOpen ? <QRcode id={id} closeClick={this.handleClose.bind(this)} /> : null
        }
      </div>
    );
  }
}

class GoodDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavFixed: false
    };
  }

  handleScroll(e) {
    e.persist();
    if (e.target.scrollTop > 175) {
      this.setState({
        isNavFixed: true
      });
    } else if (this.state.isNavFixed) {
      this.setState({
        isNavFixed: false
      });
    }
  }

  render() {
    const {id, navigator} = this.props;
    return (
      <Page>
        {this.state.isNavFixed ? <NavBar backButton={true} isFixed={true} navigator={navigator} isDetail={true} /> : null}
        <Page onScroll={this.handleScroll.bind(this)}>
          <NavBar backButton={true} navigator={navigator} isDetail={true} />
          <TheCarousel id={id} navigator={navigator} />
          <div style={{
            pointerEvents: 'none',
            position: 'absolute',
            top: '50px',
            left: 0,
            width: '100%',
            height: '215px',
            background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 245, 245, 0.5) 50%, rgba(255, 245, 245, 1) 100%)'
          }} ></div>
          <BasicInfo navigator={navigator} id={id}/>
          <Story id={id} />
          <Comments id={id} />
        </Page>
        <FuncTab id={id} />
      </Page>
    );
  }
}

// const GoodDetailPage = ({navigator, id}) => {
//   return (
//     <Page onScroll={(e) => console.log(e.target.scrollTop)}>
//       <DynamicNavBar />
//       <TheCarousel id={id} navigator={navigator} />
//       <div style={{
//         pointerEvents: 'none',
//         position: 'absolute',
//         top: '50px',
//         left: 0,
//         width: '100%',
//         height: '215px',
//         background: 'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 245, 245, 0.5) 50%, rgba(255, 245, 245, 1) 100%)'
//       }} ></div>
//       <BasicInfo id={id}/>
//       <Story id={id} />
//       <Comments id={id} />
//     </Page>
//   );
// };

export default GoodDetailPage;
