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
      `https://api.themoviedb.org/3/search/movie?api_key=ffceff3589088ca1ba677a8bfff757d8&query=${query}`
    );
    const data = await response.json();
    // Fetcher filmer
    setMovies(data.results);
  };

  const handleSearch = (searchTerm) => {
    fetchMovies(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default MovieList;