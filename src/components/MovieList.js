import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

//Dette komponentet er hele oppsettet for nettsiden, den fetcher filmene med utgangspunkt i James Bond filmer, og håndterer rendring av MovieCard komponentet.
//I dette komponentet fetcher jeg film id og query for søkefunksjon og for å hente informasjon om den enkelte filmen det gjelder, som oppgaven spør om


//Komponent for å vise liste over filmer 
function MovieList() {
  const [movies, setMovies] = useState([]);

  //"standard søkeforespørsel", starter siden med James Bond filmer som blir fetchet 
  useEffect(() => {
    // "default search query"
    fetchMovies("James+Bond");
    //tom array i useEffect så den ikke oppdaterer seg selv etter første "render"
  }, []);

  //fetcher film id for å få tak i detaljert informasjon om en spesifikk film via dens id
  const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=42183318&i=${imdbID}`);
  const data = await response.json();
  return data;
};

// Fetcher filmer fra OMDB API basert på en søkeforespørsel
  const fetchMovies = async (searchQuery) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=42183318&s=${searchQuery}`);
  const data = await response.json();

  // Sjekker om det er noen filmer som matcher søkeforespørselen
    if (data.Search) {
    // Mapper igjennom hver film og henter detaljert informasjon
    const movieDetails = data.Search.map((movie) => fetchMovieDetails(movie.imdbID));
    // Venter på at alle requests for detaljert informasjon skal fullføres
    const detailedMovies = await Promise.all(movieDetails);
    setMovies(detailedMovies);
  } else {
    // Hvis ingen filmer matcher søkeforespørselen, tømmer vi listen
    setMovies([]);
  }
};

  //Håndtering av søk fra searchbar og fetcher filmene basert på "querien" eller søkeordet
  const handleSearch = (searchTerm) => {
    fetchMovies(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {/* Gjengir MovieCard-komponenten for hver film i "movies"-state */}
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;