import React, {useState, useEffect} from 'react'
import UpcomingMovie from '../UpcomingMovie/UpcomingMovie';
import './movieListWrapper.scss'

const MovieListWrapper = () => {
    let [upcomingMovies, setUpcomingMovies] = useState([]);
    const API_KEY = '3f18e7c073e37976013151c64f5ee4ad';
    let [pages, setPages] = useState(1);
    
    async function fetchUpcomingMovies() {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pages}`);
            const data = await response.json();
            setUpcomingMovies([
                ...upcomingMovies,
                ...data.results
            ]);
        } catch (error) {
            console.log(error.message)
        }
    }

    function addPages() {
        setPages(pages++)
    }
    useEffect(() => {
        fetchUpcomingMovies()
    }, [pages])
  return (
    <>
    <div className='upcoming-movies-container main'>
        {upcomingMovies.map(movie => {
            return <UpcomingMovie movie={movie} key={movie.id}/>
        })}
    </div>
    <button className='btn movie-list-btn' onClick={() => addPages()}>Load more</button>
    </>    
  )
}

export default MovieListWrapper