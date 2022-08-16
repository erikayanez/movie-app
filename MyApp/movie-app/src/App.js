import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import AddFavourites from './Components/AddFavourites';

 const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

        const getMovieRequest = async() => {
          const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1a0cfd0b`;

          const response = await fetch(url);
          const responseJson =await response.json();

          if(responseJson.Search){
            setMovies(responseJson.Search);
          }
        };

        useEffect((searchValue)=>{
          getMovieRequest(searchValue);
        }, [searchValue]);
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies={movies} favouriteComponent={AddFavourites} />
      </div> 
    </div>
  )
}

export default App;
