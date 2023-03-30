import React from "react";
import { Link } from "react-router-dom";
import "../sass/MovieCard.scss";

//Komponent for FilmKortene. 

//Kaller på proppen Movie som inneholder informasjon om filmen
//Sjekker også om det er en poster tilgjengelig, om ikke hentes placeholderbilde fra placeholder.com
function MovieCard({ movie }) {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x444?text=No+Poster+Available";
  const { Title, Year, Genre, Director, Actors, Awards, imdbID } = movie;

  //Sender ut filmkortet som inneholder tittel, år, sjanger, direktør, skuespillere, priser og knapp til videre informasjon om filmen
  //Mer om filmen knappen linker til urlen med den spesifikke filmens id med dynamisk url-sti
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={Title} />
      <div className="movie-card-info">
        <h2>{Title} ({Year})</h2>
        <p>Sjanger: {Genre}</p>
        <p>Direktør: {Director}</p>
        <p>Skuespillere: {Actors}</p>
        <p>Priser: {Awards !== "N/A" ? Awards : "None"}</p>
        <Link to={`/movie/${imdbID}`} className="more-info-btn">
        Mer om filmen
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;