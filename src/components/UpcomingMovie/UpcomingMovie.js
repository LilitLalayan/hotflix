import React from 'react'
import './upcomingMovie.scss'

const UpcomingMovie = ({movie}) => {
    const url = "https://image.tmdb.org/t/p/w200"
    const color = movie.vote_average >= 7 ? "green" : "red"
  return (
    <div className='item-container upcoming-movie'>
        <div className='img-container' style={{backgroundImage: `url(${url}${movie.poster_path})`}}>
            <div className='item-rate flex' style={{border: `1px solid ${color}`}}>{movie.vote_average.toFixed(1)}</div>
            <div className='default-text'>The movie</div>
        </div>
        <div className='item-info'>
            <h3 className='item-title'>{movie.title}</h3>
            <p className='item-date'>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default UpcomingMovie