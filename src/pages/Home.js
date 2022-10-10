import React from 'react'
import { dataDigitalBestSeller } from '../data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '.././App.css';

const Home = () =>  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className="home-center">
        { <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div key={item.id} className="home-image">
            <img
                src={require(`.././assets/images/home/${item.id}.jpg`)}
                alt={item.title}
              />
          </div>
        ))}
      </Slider> }
        </div>
    );
}

export default Home;