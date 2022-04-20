import React from 'react'
import { Link } from 'react-router-dom';
import UpcomingMovie from '../UpcomingMovie/UpcomingMovie';
import './movieListWrapper.scss'

const MovieListWrapper = ({upcomingMovies, pages, genres, addPages}) => {
  return (
    <>
    <div className='upcoming-movies-container main'>
        {upcomingMovies.map(movie => {
            return <Link to={'/movie?id=' + movie.id} style={{textDecoration: 'none'}} key={movie.id}><UpcomingMovie movie={movie} genres={genres}/></Link>
        })}
    </div>
    <button className='btn movie-list-btn' onClick={(e) => {
        if(pages === 19){
            e.target.style.display = 'none';
            return
        }
        addPages()
    }}>
        Load more
    </button>
    </>    
  )
}

export default MovieListWrapper