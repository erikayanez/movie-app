import React from 'react'

export default function MovieList(props) {
  return (
    <>
    {/* Will return a list of movies */}
        {props.movies.map((movie, index)=> 
        <div>
            <img src={movie.Poster} alt='movie'></img>
        </div>
        )}
    </>
  )
}
