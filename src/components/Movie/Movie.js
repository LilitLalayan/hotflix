import React, { useEffect, useState, useRef} from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Slidercontainer from '../Slider/Slidercontainer';
import './movie.scss'

const Movie = ({movies}) => {
    const [movieData, setMovieData] = useState({})
    const [video, setVideo] = useState({});
    const vid = useRef('video');
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

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setVideo(res.results[0])
        })
    }, [])
   
  
  return (
      <>
            <Header />
           {movieData.genres && movieData.release_date &&(
            <div className='movie-container flex' >
                <div className='banner-blur flex' style={{backgroundImage: `url(${url}${movieData.poster_path})`}}></div>
                <div className='banner' style={{backgroundImage: `url(${url}${movieData.poster_path})`}}></div>
                <h1 className='movie-title'>{movieData.title || ''}</h1>
                <div className='details flex'>
                    <span className='detail'>{movieData.release_date.slice(0,4)}</span>
                    <span className='detail'>{runtime}</span>
                </div>
                <div className='trailer-wrapper flex'>
                    <h4 className='mini-title'>Trailer</h4>
                    <div className='play-icon flex' onClick={()=>vid.current.style.display="block"}>></div>
                    <div className='video' ref={vid}>
                        <div className='close' onClick={()=>vid.current.style.display="none"}>x</div>
                        <div className='frame-container'>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
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
                    <Slidercontainer movies={movies.filter(m => m.genre_ids.includes(movieData.genres[0].id || movieData.genres[1].id || movieData.genres[2].id))} settings={settings}/>  
                </div>          
            </div>
        )}
      </>
  )
}

export default Movie