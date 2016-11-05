import React from 'react';

import {
  Toolbar,
  BackButton,
  Button,
  Icon
} from 'react-onsenui';

const styles = {
  leftButton: {
    marginLeft: '10px',
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

const NavApp = ({navigator, isHome, backButton, isNav, isDetail}) => {
  if (isHome && isNav) {
    return null;
  }
  return (
    <Toolbar
      modifier={`${isHome ? 'transparent' : ''}`}
    >
      <div className='left' style={{width: '22%'}}>
        {isHome ? <Button modifier='quiet' style={styles.leftButton} >广州 <Icon icon='fa-angle-down' /></Button> : null}
        {backButton ? <BackButton style={{marginLeft: '16px'}} onClick={() => navigator.popPage()}></BackButton> : null}
      </div>
      {isHome ? <div className='center' style={{position: 'relative', width: '78%', textAlign: 'left', paddingRight: '20px'}}><input type='search' defaultValue='' placeholder='罗大哥赏味咖啡' style={styles.searchBar}/><Icon icon='fa-search' style={{position: 'absolute', left: '10px', top: '13.5px'}} /></div> : null}
      {isDetail ? }
    </Toolbar>
  );
};

export default NavApp;
