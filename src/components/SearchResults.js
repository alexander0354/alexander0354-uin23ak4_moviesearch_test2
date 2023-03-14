import React from 'react';
import MovieCard from './MovieCard';

function SearchResults({ searchResults }) {
    const handleSearch = async (searchString) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=ffceff3589088ca1ba677a8bfff757d8&query=${searchString}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;