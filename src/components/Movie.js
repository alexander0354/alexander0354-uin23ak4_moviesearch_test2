import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ffceff3589088ca1ba677a8bfff757d8`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovie();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
    </div>
  );
};

export default Movie;