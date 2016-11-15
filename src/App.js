import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js'
import ListOfTenThings from './components/Repeat.js'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WeatherApp from './components/WeatherApp.js'
import mainReducer from './reducers';

var store = createStore(mainReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <ListOfTenThings />
        <Provider store={store}>
          <WeatherApp />
        </Provider>
      </div>
    );
  }
}

export default App;
