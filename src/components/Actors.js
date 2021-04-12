import React from "react";
import { actors } from "../data";

const actorsData = actors.map((actor, index) => (
  <div className="actor" key={index}>
    Actor Name: {actor.name},<br></br>
    Actor Movies:{" "}
    {actor.movies.map((movie) => (
      <ul>{movie}</ul>
    ))}
  </div>
));

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsData}
    </div>
  );
};

export default Actors;
