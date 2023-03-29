/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Komponent for å vise info av enkelt film basert på filmens ID.

const Movie = () => {
  //Navigasjon
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Definerer en async funksjon for å hente filmdata
      const fetchMovie = async () => {
      const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ffceff3589088ca1ba677a8bfff757d8`
      );
      const data = await response.json();

      // Setter filmdata og feilmelding basert på responsen
      setMovie(response.ok ? data : null);
      setError(response.ok ? null : data.status_message);
      setIsLoading(false);
    };

    // Kaller fetchMovie funksjonen
    fetchMovie();
  }, [id]);

  // Funksjon som definerer innholdet som skal vises, avhengig av om det er en feil eller ikke, og om dataen fortsatt lastes
  let content;
  if (error) {
    // Vis feilmelding dersom det oppstår en feil
    content = <div>{error}</div>;
  } else if (isLoading) {
    // Vis "Loading..." dersom dataen fortsatt lastes
    content = <div>Loading...</div>;
  } else {
    // Vis filmdata dersom alt gikk bra
    content = (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    );
  }

  return <>{content}</>;
};

export default Movie;*/