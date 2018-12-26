import React, { Component } from 'react';
import Header from './components/Header';
import Featured from './components/featured';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '2000px', background: 'orange' }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
