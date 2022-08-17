import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import AddFavorites from './Components/AddFavorites';
import RemoveFavorites from './Components/RemoveFavorites';

 const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('');

        const getMovieRequest = async() => {
          const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=1a0cfd0b`;

          const response = await fetch(url);
          const responseJson =await response.json();

          if(responseJson.Search){
            setMovies(responseJson.Search);
          }
        };



        useEffect((searchValue)=>{
          getMovieRequest(searchValue);
        }, [searchValue]);

        useEffect(() => {
          const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites')) || [];
          console.log(movieFavorites)

          setFavorites(movieFavorites);
        }, []);

        const saveToLocalStorage = (items) => {
          localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
        };

        const addFavoriteMovie = (movie) => {
          const newFavoriteList = [...favorites, movie];
          setFavorites(newFavoriteList);
          saveToLocalStorage(newFavoriteList);
        };

        const removeFavoriteMovie = (movie) => {
          const newFavoriteList = favorites.filter(
            (favorite)=> favorite.imdbID !== movie.imdbID);

          setFavorites(newFavoriteList);
          saveToLocalStorage(newFavoriteList);
          };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="Movie App"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddFavorites} />
      </div> 
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="Favorites"/>
      </div>
      <div className='row'>
        <MovieList movies={favorites} handleFavoritesClick={removeFavoriteMovie} favoriteComponent={RemoveFavorites} />
      </div> 
    </div>
  )
}

export default App;
