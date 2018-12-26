import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
  // Switch to local for final use
  const imgUrls = [
    'https://source.unsplash.com/collection/785618/1600x900',
    'https://source.unsplash.com/collection/1278842/1600x900',
    'https://source.unsplash.com/collection/3303051/1600x900',
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Carousel images={imgUrls} />
      <div className="featured-text">
        <div className="wrapper">Featured Text</div>
      </div>
      <Countdown />
    </div>
  );
};
export default Featured;
