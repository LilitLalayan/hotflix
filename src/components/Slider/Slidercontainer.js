import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from '../SliderItem/SliderItem';
import './slider.scss'
import { Link } from 'react-router-dom';


 const Slidercontainer = ({movies, settings}) => {
  
  return (
    <div className='slider-container'>
      <Slider {...settings}>{
        movies.map((movie) => {
          return <Link to={'/movie?id=' + movie.id} key={movie.id} target="_blank"><SliderItem movie={movie} /></Link>
        })
      }</Slider>
    </div>
  )
}
export default Slidercontainer