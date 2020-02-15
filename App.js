import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import  HomePage from './HomePage';

export default class App extends React.Component {

  render() {
    return (
          <Provider store = { store }>
            <HomePage />
          </Provider>
        )
  }
}
