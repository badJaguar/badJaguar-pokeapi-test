import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import styles from './App.module.scss';
import rootReducer from './redux/root-reducer';
import { Header } from './ui/header/header';
import { PokeListConnect } from './ui/pokemons-list/pokemons-list';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <PokeListConnect />
      </div>
    </Provider>
  );
}

export default App;
