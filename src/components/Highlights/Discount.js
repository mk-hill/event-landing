import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import BuyButton from '../ui/BuyButton';

class Discount extends Component {
  state = {
    discountShown: 0,
    discount: 35,
  };

  increment() {
    const { discountShown, discount } = this.state;
    if (discountShown < discount) {
      this.setState(prevState => ({
        discountShown: prevState.discountShown + 1,
      }));
    }
  }

  componentDidUpdate() {
    setTimeout(() => this.increment(), 30);
  }

  render() {
    return (
      <div className="center-wrapper">
        <div className="discount-wrapper">
          <Fade onReveal={() => this.increment()}>
            <div className="discount-percentage">
              <span>{this.state.discountShown}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount-description">
              <h3>Early bird pricing currently available</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quibusdam accusantium ratione sed illum tenetur
                quae! Sequi quaerat iusto doloremque, dignissimos error natus
                distinctio, fugit!
              </p>
              <BuyButton url="" />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
