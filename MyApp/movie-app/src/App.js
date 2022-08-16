import React from 'react';
import { useState, useEffect } from 'react';

// Components
import MovieList from './Components/MovieList';

// Style
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


// Movies are coming from the API
function App() {
  const [movies, setMovies] = useState([
    {
        "Title": "Star Wars",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }]);

    const getMovieRequest = async () => {
      const url = "http://www.omdbapi.com/?s=star wars&apikey=1a0cfd0b"

      const response = await fetch(url);
      const responseJson = await response.json

      console.log(responseJson);
    };

    useEffect (()=> {
      getMovieRequest();
    }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;
