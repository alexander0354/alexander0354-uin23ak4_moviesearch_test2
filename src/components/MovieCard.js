import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/MovieCard.scss';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x444?text=No+Poster+Available';
  const title = movie.title ? movie.title : "Title Not Available";
  const year = movie.release_date ? movie.release_date.substring(0, 4) : "Year Not Available";

  return (
    <li className="movie-card">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
      <Link to={`/movie/${movie.id}`}>More about this movie</Link>
    </li>
  );
}

export default MovieCard;