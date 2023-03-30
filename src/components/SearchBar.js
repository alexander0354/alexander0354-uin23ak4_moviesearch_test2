import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../sass/SearchBar.scss";

function SearchBar({onSearch}) {
  const { searchQuery } = useParams();
  const [searchTerm, setSearchTerm] = useState(searchQuery || "");
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm && searchTerm.length >= 3) {
      history.push(`/search/${searchTerm}`);
      onSearch(searchTerm);
    }
  };

  useEffect(() => {
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Søk etter film!"
      />
      <button type="submit">Søk</button>
    </form>
  );
}

export default SearchBar;