import React from 'react';

import {
  Navigator,
  Tabbar,
  Tab,
  Page
} from 'react-onsenui';

import MainPage from './MainPage';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

class IndexPage extends React.Component {
  renderTabs() {
    return [
      {
        content: <MainPage navigator={this.props.navigator} />,
        tab: <Tab label='首页' icon='md-home' />
      },
      {
        content: <MainPage navigator={this.props.navigator} />,
        tab: <Tab label='发现' icon='md-compass' />
      },
      {
        content: <MainPage navigator={this.props.navigator} />,
        tab: <Tab label='我的' icon='md-account' />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs.bind(this)}
        />
      </Page>
    );
  }
}

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{component: IndexPage, key: 'MAIN_PAGE'}}
  />
);

export default App;
