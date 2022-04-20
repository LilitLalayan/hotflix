import Carousel from './Carousel/Carousel';
import Header from './Header/Header';
import MovieListContainer from './MovieListContainer/MovieListContainer';
import './../App.scss';
    
const Homepage = ({movies, upcomingMovies, pages, genres, addPages}) => {
        return (
        <div className='App'>
            <Header />
            <Carousel movies={movies} />
            <MovieListContainer upcomingMovies={upcomingMovies} pages={pages} addPages={addPages} genres={genres}/>
        </div>
    )
}

export default Homepage;