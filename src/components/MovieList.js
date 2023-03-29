import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // "default search query"
    fetchMovies("James+Bond");
  }, []);

  // Async - await syntax for å fetche filmers data fra APIet
const fetchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=42183318&s=${query}`
  );
  const data = await response.json();
  //Henter filmer 
  setMovies(data.Search);
};

  const handleSearch = (searchTerm) => {
    fetchMovies(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
      {movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
}

export default MovieList;