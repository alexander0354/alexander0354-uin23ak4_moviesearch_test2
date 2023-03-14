import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSearchResults={setSearchResults}
          />
          <MovieList
            movies={searchResults}
            onMovieSelect={setSelectedMovie}
          />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
