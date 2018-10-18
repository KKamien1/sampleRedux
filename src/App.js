import React from 'react';
import './App.sass';
import Simple from './components/Simple';
import ButtonGroup from './components/buttonGroup';
import store from './store';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Simple tech={store.getState().tech} />
      <ButtonGroup key={2} technologies={['React', 'Elm', 'Reactredux']}>
        Elo
      </ButtonGroup>
    </header>
  </div>
);

export default App;
