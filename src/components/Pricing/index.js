import React, { Component } from 'react';
import BuyButton from '../ui/BuyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    categories: [
      {
        price: 100,
        title: 'Balcony ',
        desc:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quae, fuga modi nobis mollitia tempora ipsum quia consectetur sit molestiae.',
        url: '',
        delay: 300,
      },
      {
        price: 150,
        title: 'Floor',
        desc:
          'Ab tempore eius illum accusantium incidunt, sunt atque recusandae. Repellat ullam velit pariatur aspernatur, a accusamus obcaecati rerum!',
        url: '',
        delay: 0,
      },
      {
        price: 250,
        title: 'Club',
        desc:
          'Vero impedit doloribus nemo delectus animi autem repellat, repudiandae error eligendi atque sunt placeat, nostrum non totam. Minima?',
        url: '',
        delay: 300,
      },
    ],
  };

  showBoxes = () =>
    this.state.categories.map(({ title, price, desc, url, delay }) => (
      <Zoom key={title} delay={delay}>
        <div className="pricing-item">
          <div className="pricing-inner-wrapper">
            <div className="pricing-title">
              <span>${price}</span>
              <span>{title}</span>
            </div>
            <div className="pricing-description">{desc}</div>
            <div className="pricing-buttons">
              <BuyButton url={url} />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck-black">
        <div className="center-wrapper pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
