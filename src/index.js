import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import store from './store';

import App from './App';

const render = () => {
  if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
};
render();
store.subscribe(render);
