import React from 'react';

import {
  Toolbar,
  BackButton,
  Button,
  Icon
} from 'react-onsenui';

const styles = {
  leftButton: {
    color: 'white'
  },
  rightButton: {
    color: 'white'
  },
  searchBar: {
    background: 'rgba(255, 255, 255, 0.4)',
    color: 'white',
    fontSize: '14px',
    borderRadius: '999em',
    height: '28px',
    boxShadow: 'none',
    border: 'none',
    padding: '4px 30px',
    width: '100%',
    lineHeight: '14px',
    verticalAlign: 'middle'
  }
};

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
  }

  toggleLike() {
    this.setState({
      isLike: !this.state.isLike
    });
  }

  render() {
    return (
      <Button className='navbar__like_button' modifier='quiet' style={styles.rightButton} onClick={this.toggleLike.bind(this)} >
        <Icon icon={`${this.state.isLike ? 'fa-heart' : 'fa-heart-o'}`} />
      </Button>
    );
  }
}

const NavApp = ({navigator, isHome, backButton, isFixed, isDetail}) => {
  return (
    <Toolbar
      style={isFixed ? {
        position: 'fixed',
        WebkitTransform: 'translateZ(0)'
      } : {}}
      className='nb__toolbar'
      modifier={`${isFixed ? '' : 'transparent'}`}
    >
      <div className='left' style={{width: '22%'}}>
        {isHome ? <Button modifier='quiet' style={styles.leftButton} >广州 <Icon icon='fa-angle-down' /></Button> : null}
        {backButton ? <BackButton style={{marginLeft: '14px'}} onClick={() => navigator.popPage()}></BackButton> : null}
      </div>
      {isHome ? <div className='center' style={{position: 'relative', width: '78%', textAlign: 'left', paddingRight: '10px'}}><input type='search' defaultValue='' placeholder='罗大哥赏味咖啡' style={styles.searchBar}/><Icon icon='fa-search' style={{position: 'absolute', left: '10px', top: '13.5px'}} /></div> : null}
      {isDetail ? <div className='center' style={{width: '50%'}}></div> : null}
      {isDetail ? (
        <div className='right'>
          <Like />
          <Button className='navbar__share_button' modifier='quiet' style={styles.rightButton} >
            <Icon icon='fa-share' />
          </Button>
        </div>
      ) : null}
    </Toolbar>
  );
};

export default NavApp;
