import React, { Component } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <About />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
