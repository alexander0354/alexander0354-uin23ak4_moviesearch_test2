import React from "react";
import { useHistory } from "react-router-dom/esm/react-router-dom";

const Search = ({ searchTerm, setSearchTerm, setSearchResults }) => {
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ffceff3589088ca1ba677a8bfff757d8&query=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.results);
      history.push("/");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Søk etter filmer..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Søk</button>
    </form>
  );
};

export default Search;