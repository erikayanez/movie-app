import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';


export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

        const getMovieRequest = async() => {
          const url = "http://www.omdbapi.com/?s=avengers&apikey=1a0cfd0b";

          const response = await fetch(url);
          const responseJson =await response.json();

          console.log(responseJson);
          setMovies(responseJson.Search);
        };

        useEffect(()=>{
          getMovieRequest();
        }, []);
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading="Movies"/>
      </div>
      <div className='row'>
      <MovieList movies={movies} />
      </div> 
    </div>
  )
}


