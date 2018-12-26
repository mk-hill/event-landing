import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
  state = {
    eventDate: 'Jun, 27, 2019',
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
    eventPassed: false,
    updateInterval: null,
  };

  calculateTime() {
    const { eventDate, updateInterval } = this.state;
    const time = Date.parse(eventDate) - Date.parse(new Date());
    if (time < 0) {
      window.clearInterval(updateInterval);
      return this.setState({ eventPassed: true });
    }
    return this.setState({
      secs: Math.floor((time / 1000) % 60),
      mins: Math.floor((time / 1000 / 60) % 60),
      hrs: Math.floor((time / (1000 * 60 * 60)) % 24),
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
    });
  }

  componentDidMount() {
    const updateInterval = setInterval(() => this.calculateTime(), 1000);
    this.setState({ updateInterval });
  }

  render() {
    const { eventPassed, days, hrs, mins, secs } = this.state;
    return eventPassed ? null : (
      <Slide left delay={1500}>
        <div className="countdown-wrapper">
          <div className="countdown-title">Event starts in</div>
          <div className="countdown-bottom">
            <div className="countdown-item">
              <div className="countdown-time">{days}</div>
              <div className="countdown-tag">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-time">{hrs}</div>
              <div className="countdown-tag">Hrs</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-time">{mins}</div>
              <div className="countdown-tag">Min</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-time">{secs}</div>
              <div className="countdown-tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
