
// src/components/SlickImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import school1 from './school1.jpg';
import school2 from './school2.avif';
import school3 from './school3.jpg';
import school4 from './school4.jpg'
import school5 from './School5.jpg'

const SlickImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
  <div className='md:p-5 rounded-lg p-2 h-auto md:mt-6'>
      <Slider {...settings}>
      <div><img src={school1} alt="slide1" className="w-full h-72  md:h-140  object-cover rounded-lg" /></div>
      <div><img src={school2} alt="slide2" className="w-full h-72 md:h-140  object-cover rounded-lg" /></div>
      <div><img src={school3} alt="slide3" className="w-full h-72  md:h-140 object-cover rounded-lg" /></div>
       <div><img src={school4} alt="slide3" className="w-full h-72  md:h-140 object-cover rounded-lg" /></div>
        <div><img src={school5} alt="slide3" className="w-full h-72  md:h-140 object-cover rounded-lg" /></div>
    </Slider>
  </div>
  );
}; 

export default SlickImageSlider;
