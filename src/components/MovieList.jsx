import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"

const MovieList = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const handleTitleFilterChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRateFilterChange = (event) => {
    setFilterRate(event.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="movie-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleTitleFilterChange}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          min="0"
          max="10"
          step="0.5"
          value={filterRate}
          onChange={handleRateFilterChange}
        />
      </div>
      <div className="cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
