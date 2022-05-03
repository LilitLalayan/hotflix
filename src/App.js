import Homepage from './components/homepage'
import React, {useState, useEffect}from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Movie from './components/Movie/Movie';

function App() {
  let [movies, setMovies] = useState([])
  let [upcomingMovies, setUpcomingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const API_KEY = '3f18e7c073e37976013151c64f5ee4ad'
  let [pages, setPages] = useState(1);
    async function fetchGenres() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            const data = await response.json();
            setGenres(data.genres)
        } catch (e) {
            alert(e.message)
        }
    }
     const fetchUpcomingMovies = async() => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pages}`);
            const data = await response.json();
            setUpcomingMovies([
                ...upcomingMovies,
                ...data.results
            ]);
        } catch (error) {
            alert(error.message)
        }
    }

    function addPages() {
        setPages(++pages);
    }
    useEffect(() => {
        fetchUpcomingMovies()
    }, [pages])

    useEffect(() => {
        fetchGenres()
    }, [])

  async function fetchData() {
    let allMovies = [];
      Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`)
    ])
    .then(results => {
        return Promise.all(results.map(r => {
        return r.json();        
    }))
   })
    .then(data => {
      data.forEach(d => {
      allMovies = allMovies.concat(d.results)
      
    })
    setMovies(allMovies)
  })
    .catch(error => alert(error.message))
  }

  useEffect(() => {
   fetchData();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage movies={movies} upcomingMovies={upcomingMovies} pages={pages} addPages={addPages} genres={genres}/>} />
        <Route path="movie" element={<Movie movies={movies} apiKey={API_KEY}/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
