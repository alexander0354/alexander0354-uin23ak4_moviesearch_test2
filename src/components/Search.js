const handleFormSubmit = async (event) => {
  event.preventDefault();
  if (searchTerm && searchTerm.length >= 3) {
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