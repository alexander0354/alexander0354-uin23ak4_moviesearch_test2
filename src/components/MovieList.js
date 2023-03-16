import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../sass/MovieList.scss";
import MovieCard from "./MovieCard";

function MovieList() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMovies("James+Bond");
  }, []);

  const fetchMovies = async (searchQuery) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ffceff3589088ca1ba677a8bfff757d8&query=${searchQuery}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const urlEncodedSearchQuery = encodeURIComponent(searchQuery);
      fetchMovies(urlEncodedSearchQuery);
    }
  };

  return (
    <div className="movie-list">
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;