import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../sass/MovieProfile.scss';

function MovieProfile() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);

  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=42183318&i=${movieId}`);
    const data = await response.json();
    setMovie(data);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x444?text=No+Poster+Available';
  const title = movie.Title ? movie.Title : "Title Not Available";
  const year = movie.Year ? movie.Year : "Year Not Available";
  const genres = movie.Genre ? movie.Genre : "Genre Not Available";
  const director = movie.Director ? movie.Director : "Director Not Available";
  const actors = movie.Actors ? movie.Actors : "Actors Not Available";
  const awards = movie.Awards ? movie.Awards : "Awards Not Available";

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