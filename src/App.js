import React from 'react';
import { createStore } from 'redux';
import './App.sass';

import reducer from './reducers';
import Simple from './components/Simple';

const initialState = { tech: 'initialReducer' };
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <Simple tech={store.getState().tech} />
    </header>
  </div>
);

export default App;
