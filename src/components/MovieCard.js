import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/MovieCard.scss';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x444?text=No+Poster+Available';
  console.log('Poster URL:', posterUrl);
  const title = movie.title ? movie.title : "Title Not Available";
  const year = movie.release_date ? movie.release_date.substring(0, 4) : "Year Not Available";

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img
        src={posterUrl}
        alt={movie.title}
      />
      <Link to={`/movie/${movie.id}`}>More about this movie</Link>
    </div>
  );
};

export default MovieCard;