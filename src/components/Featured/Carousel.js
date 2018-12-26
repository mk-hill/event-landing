import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    speed: 700,
    infinite: true,
    autoplay: true,
  };

  return (
    <div
      className="carousel-wrapper"
      style={{
        overflow: 'hidden',
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        {images.map(url => (
          <div key={url}>
            <div
              className="carousel-image"
              style={{
                background: `url('${url}')`,
                height: `${window.innerHeight}px`,
                backgroundSize: 'cover',
              }}
            />
          </div>
        ))}
        {/* <div>{images[0]}</div>
        <div>image 1</div>
        <div>image 1</div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
