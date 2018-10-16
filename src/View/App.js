import React, { Component } from 'react';
import { AiranConnector } from '../airan';
import { counter } from '../Subscriptions';
import { increment } from '../Actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log("SCS", counter);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*<AiranConnector counter="::counter">*/}
            <p>Counter: {counter()}</p>
            <button onClick={increment}>Increment</button>
          {/*</AiranConnector>*/}
        </header>
      </div>
    );
  }
}

export default App;
