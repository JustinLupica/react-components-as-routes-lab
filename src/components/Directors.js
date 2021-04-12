import React from "react";
import { directors } from "../data";

const directorsData = directors.map((director, index) => (
  <div className="director" key={index}>
    Director Name: {director.name},<br></br>
    Director Movies:{" "}
    {director.movies.map((movie) => (
      <ul>{movie}</ul>
    ))}
  </div>
));

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsData}
    </div>
  );
};

export default Directors;
