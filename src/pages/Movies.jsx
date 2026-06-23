import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "d638b0b8";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []));
  }, []);

  return (
    <div className="movie-page">
      <h1>Movies</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} width="180" />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;