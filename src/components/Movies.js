import React from "react";
import { movies } from "../data";

const movieData = movies.map((movie) => (
  <div className="movie">
    Title: {movie.title},<br></br>
    Time: {movie.time},<br></br>
    Genres:{" "}
    {movie.genres.map((genre) => (
      <ul>{genre}</ul>
    ))}
  </div>
));

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieData}
    </div>
  );
};

export default Movies;
