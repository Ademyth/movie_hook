import React from "react";
import "./MovieCard.css"

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="rating">{rating}</span>
      </div>
      <div className="movie-overview">
        <h4>Overview</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
