import React from 'react';
import { useHistory } from 'react-router-dom';
import '../sass/MovieCard.scss';

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x444?text=No+Poster+Available';
  const title = movie.title ? movie.title : "Title Not Available";
  const year = movie.release_date ? movie.release_date.substring(0, 4) : "Year Not Available";
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img
        src={posterUrl}
        alt={movie.title}
      />
      <button onClick={handleClick}>More about this movie</button>
    </div>
  );
};

export default MovieCard;