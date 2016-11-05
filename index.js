import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './components/App';

import './icons/css/weather-icons.css';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import './stylus/index.styl';

const rootElement = document.getElementById('root');

ons.ready(() => render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
