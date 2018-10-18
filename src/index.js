import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
