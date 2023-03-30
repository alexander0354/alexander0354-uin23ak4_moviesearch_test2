import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../sass/SearchBar.scss";

// SearchBar-komponent som håndterer søk etter at minst tre tegn har blitt skrevet inn
function SearchBar({ onSearch }) {
  const { searchQuery } = useParams();    // Henter søkeord fra URL
  const [searchTerm, setSearchTerm] = useState(searchQuery || "");   // Setter opp søkeord som et state og bruker URL-søkeord (hvis det eksisterer)
  const history = useHistory();   // Bruker useHistory for å navigere til en annen URL ved innsending av skjema
  
  // Håndterer innsending av søkeord
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm && searchTerm.length >= 3) {      // Søkeordet må ha minst tre tegn for å bli søkt etter
      history.push(`/search/${searchTerm}`);        // Navigerer til URL med søkeordet i pathet og bruker URL-parametere til å lagre søkeordet
      onSearch(searchTerm);     // Kjører onSearch-funksjonen med søkeordet som parameter
    }
  };

  // Setter søkefeltets verdi til verdien av URL-forespørselen (hvis det finnes)
  useEffect(() => {
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  // Håndterer endringer i søkefeltet
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Returnerer søkefeltet med funksjonalitet for å søke etter filmer
  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Søk etter en film!"
      />
      <button type="submit">Søk</button>
    </form>
  );
}

export default SearchBar;