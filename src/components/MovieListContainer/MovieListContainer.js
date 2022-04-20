import React from 'react'
import MovieListWrapper from '../MovieListWrapper/MovieListWrapper'
import './movieListContainer.scss'

const MovieListContainer = ({upcomingMovies,pages, addPages, genres}) => {
  return (
    <div className='movie-list-container flex'>
        <h2 className='movie-list-title main'>Upcoming movies</h2>
        <div className='line'></div>
        <MovieListWrapper upcomingMovies={upcomingMovies} pages={pages} addPages={addPages} genres={genres}/>
    </div>
  )
}

export default MovieListContainer