import { useState, useEffect } from "react";
import { /*useHistory,*/ useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";


//Komponent for resultatene basert på søksforespørselen
//Dette brukes via useParams for å hente søkeordet fra URL-en


function SearchResults() {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  /*const [searchTerm, setSearchTerm] = useState(searchQuery);
  const history = useHistory();*/

  useEffect(() => {
    if (searchQuery && searchQuery.length >= 3) {
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]);

const fetchSearchResults = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=42183318&s=${query}`
  );
  const data = await response.json();
  setSearchResults(data.Search);
};

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <SearchBar />
      <ul>
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;