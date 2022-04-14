import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <MovieListContainer />
    </div>
  );
}

export default App;
