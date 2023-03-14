import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/MovieList.scss';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      const urlEncodedSearchQuery = encodeURIComponent(searchQuery);
      window.location.href = `/search/${urlEncodedSearchQuery}`;
    }
  };

  return (
    <div className="movie-list">
      <h2>{movies.length > 0 ? 'Search Results' : 'James Bond Movies'}</h2>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
}

export default MovieList;