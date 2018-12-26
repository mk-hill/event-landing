import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './style.css';

import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

const ScrollableElement = ({ Component, navTitle }) => (
  <Element key={navTitle} name={navTitle}>
    <Component />
  </Element>
);

class App extends Component {
  state = {
    sections: [
      {
        navTitle: 'Featured',
        Component: Featured,
      },
      {
        navTitle: 'About Event',
        Component: About,
      },
      {
        navTitle: 'Highlights',
        Component: Highlights,
      },
      {
        navTitle: 'Pricing',
        Component: Pricing,
      },
      {
        navTitle: 'Location',
        Component: Location,
      },
    ],
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="App">
        <Header navTitles={sections.map(section => section.navTitle)} />
        {sections.map(ScrollableElement)}
        <Footer />
      </div>
    );
  }
}

export default App;
