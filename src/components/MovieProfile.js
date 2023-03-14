import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieProfile = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ffceff3589088ca1ba677a8bfff757d8`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieProfile;