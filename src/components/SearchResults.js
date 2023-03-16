import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function SearchResults() {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ffceff3589088ca1ba677a8bfff757d8&query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    };

    fetchSearchResults();
  }, [searchQuery]);

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