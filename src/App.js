import React, { Component } from 'react';
import Header from './components/Header';
import Featured from './components/featured';
import About from './components/about';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <About />
      </div>
    );
  }
}

export default App;
