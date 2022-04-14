import React from 'react'
import './sliderItem.scss'

const SliderItem = ({movie}) => {
    let url = "https://image.tmdb.org/t/p/w200"
    let color = movie.vote_average > 7 ? "green" : "red"
  return (
    <div className='slider-item-container'>
        <div className='img-container' style={{backgroundImage: `url(${url}${movie.poster_path})`}}>
            <div className='slider-item-rate flex' style={{border: `1px solid ${color}`}}>{movie.vote_average.toFixed(1)}</div>
            <div className='default-text'>The movie</div>
        </div>
        <div className='slider-item-info'>
            <h3 className='slider-item-title'>{movie.title}</h3>
            <p className='slider-item-date'>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default SliderItem