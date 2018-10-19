import React from 'react';
import './App.sass';
import Simple from './components/Simple';
import ButtonGroup from './components/buttonGroup';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import store from './store';

const App = () => (
  <div className="App">
    <Sidebar />
    <Main>
      <Simple tech={store.getState().tech} />
      <ButtonGroup key={2} technologies={['React', 'Elm', 'Reactredux']}>
        Elo
      </ButtonGroup>
    </Main>
  </div>
);

export default App;
