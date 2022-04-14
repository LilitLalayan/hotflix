import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from '../SliderItem/SliderItem';
import './slider.scss'


 const Slidercontainer = () => {
  let [movies, setMovies] = useState([])
  const API_KEY = '3f18e7c073e37976013151c64f5ee4ad'

  async function fetchData() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const data = await response.json();
      setMovies(data.results)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
   fetchData();
  }, [])
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div>
      <Slider {...settings}>{
        movies.map((movie) => {
          return <SliderItem movie={movie} key={movie.id}/>
        })
      }</Slider>
    </div>
  )
}

export default Slidercontainer