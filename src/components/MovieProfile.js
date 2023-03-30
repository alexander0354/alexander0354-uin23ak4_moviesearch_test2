import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../sass/MovieProfile.scss';

// Dette komponentet er for ekstraoppgaven hvor du har ekstra informasjon på en egen side

function MovieProfile() {
  // Henter filmens "id" fra nettadressen.
  const { id } = useParams();

  // Bruker useState hook for å lagre filmdataen.
  const [movie, setMovie] = useState(null);

  // Henter informasjonen om filmen ved hjelp av "fetchMovieDetails" funksjonen når filmens "id" endrer seg.
  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);

  // Funksjon som henter detaljert informasjon om filmen ved hjelp av dens "id".
    const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=42183318&i=${movieId}`);
    const data = await response.json();
    setMovie(data);
  };

  // Sjekker om "movie" ikke er null, hvis det er tilfelle vises en "Loading" melding i stedet for filminformasjonen.
  if (!movie) {
    return <div>Loading...</div>;
  }

  // Lagrer filmens poster, tittel, publiseringsår, sjanger, direktør, skuespillere og prisinformasjon i variabler.
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x444?text=No+Poster+Available';
  const title = movie.Title ? movie.Title : "Tittel er ikke tilgjengelig";
  const year = movie.Year ? movie.Year : "Publiserings-år er ikke tilgengelig";
  const genres = movie.Genre ? movie.Genre : "Sjanger er ikke tilgjengelig";
  const director = movie.Director ? movie.Director : "Direktørinformasjon ikke tilgjengelig";
  const actors = movie.Actors ? movie.Actors : "Skuespillere ikke tilgjengelig";
  const awards = movie.Awards ? movie.Awards : "Ingen prisutdelinger tilgjengelig";

  // Rendrer filmens detaljerte informasjon og beskrivelse.
  return (
    <div className="movie-profile">
      <div className="movie-profile-header">
        <img src={posterUrl} alt={title} />
        <div className="movie-profile-info">
          <h1>{title} ({year})</h1>
          <h2>Genres: {genres}</h2>
          <h3>Director: {director}</h3>
          <h4>Actors: {actors}</h4>
          <h4>Awards: {awards}</h4>
        </div>
      </div>
      <div className="movie-profile-description">
        <h2>Overview</h2>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieProfile;