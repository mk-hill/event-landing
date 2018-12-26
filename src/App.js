import React, { Component } from 'react';
import Header from './components/Header';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
