import React from 'react';

const Location = () => {
  return (
    <div className="location-wrapper">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.730434726736!2d-73.99648696884765!3d40.758008216968044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf001f7e585a1d1b0!2sGolden+Theatre!5e0!3m2!1sen!2sus!4v1545855901572"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location-tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
