import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_cal from '../../icons/calendar.png';
import icon_loc from '../../icons/location.png';

const About = () => {
  return (
    <div className="bck-black">
      <div className="center-wrapper">
        <div className="about-wrapper">
          <Zoom duration={500}>
            <div className="about-item">
              <div className="about-outer">
                <div className="about-inner">
                  <div className="about-icon-square bck-red" />
                  <div
                    className="about-icon"
                    style={{ background: `url(${icon_cal})` }}
                  />
                  <div className="about-title">Event Date & Time</div>
                  <div className="about-desc">October 27, 2019 11.00 PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={400}>
            <div className="about-item">
              <div className="about-outer">
                <div className="about-inner">
                  <div className="about-icon-square bck-yellow" />
                  <div
                    className="about-icon"
                    style={{ background: `url(${icon_loc})` }}
                  />
                  <div className="about-title">Event Location</div>
                  <div className="about-desc">
                    252 West 45th St New York, NY
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
