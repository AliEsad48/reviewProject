import React from "react";
import { StyledCard } from "./index.styles";
export default function index({ title, poster_path, vote_average }) {
  const IMG_API = "https://image.tmdb.org/t/p/w500";
  return (
    <StyledCard>
      <img src={IMG_API + poster_path} alt={title} className="img" />
      <div className="movie-info">
        <h6>{title}</h6>
        <span>{vote_average} </span>
      </div>
    </StyledCard>
  );
}
