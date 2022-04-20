import React, { useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Slidercontainer from '../Slider/Slidercontainer';
import './movie.scss'

const Movie = ({movies}) => {
    const [movieData, setMovieData] = useState({})
    const { search } = useLocation();
    const id = search.replace('?id=', '');
    const API_KEY = '3f18e7c073e37976013151c64f5ee4ad';
    const url = "https://image.tmdb.org/t/p/w200"
    const runtime = `${Math.floor(movieData.runtime / 60)} HRS ${movieData.runtime % 60} MINS`
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setMovieData(res)
        })
    }, [])
   
  
  return (
      <>
            <Header />
           {movieData.genres && (
            <div className='movie-container flex'>
                <div className='banner-blur flex' style={{backgroundImage: `url(${url}${movieData.poster_path})`}}></div>
                <div className='banner' style={{backgroundImage: `url(${url}${movieData.poster_path})`}}></div>
                <h1 className='movie-title'>{movieData.title || ''}</h1>
                <div className='details flex'>
                    <span className='detail'>{movieData.release_date}</span>
                    <span className='detail'>{runtime}</span>
                </div>
                <p className='overview'>{movieData.overview}</p>
                <div className='genres flex'>
                    {movieData.genres.map(g => <span className='genre' key={g.id}>{g.name}</span>)}
                </div>
                <div className='tagline flex'>
                    <h4 className='mini-title'>Tagline</h4>
                    <cite>{movieData.tagline || "--"}</cite>
                </div>
                <div className='more'>
                    <h4 className='mini-title'>More to watch</h4>
                </div>
                <div className='movie-slider-wrapper'>
                    <Slidercontainer movies={movies.filter(m => m.genre_ids.includes(movieData.genres[0].id || movieData.genres[1].id || movieData.genres[2]))} settings={settings}/>  
                </div>          
            </div>
        )}
      </>
  )
}

export default Movie