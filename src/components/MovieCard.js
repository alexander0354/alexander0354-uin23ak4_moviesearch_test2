import React from "react";
import { Link } from "react-router-dom";
import "../sass/MovieCard.scss";

function MovieCard({ movie }) {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x444?text=No+Poster+Available";
  const { Title, Year, Genre, Director, Actors, Awards, imdbID } = movie;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={Title} />
      <div className="movie-card-info">
        <h2>{Title} ({Year})</h2>
        <p>Genres: {Genre}</p>
        <p>Director: {Director}</p>
        <p>Cast: {Actors}</p>
        <p>Awards: {Awards !== "N/A" ? Awards : "None"}</p>
        <Link to={`/movie/${imdbID}`} className="more-info-btn">
          More about this movie
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;