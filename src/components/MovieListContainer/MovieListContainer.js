import React from 'react'
import MovieListWrapper from '../MovieListWrapper/MovieListWrapper'
import './movieListContainer.scss'

const MovieListContainer = () => {
  return (
    <div className='movie-list-container flex'>
        <h2 className='movie-list-title main'>Upcoming movies</h2>
        <div className='line'></div>
        <MovieListWrapper />
    </div>
  )
}

export default MovieListContainer