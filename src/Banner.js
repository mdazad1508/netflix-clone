import React from "react";
import "./Banner.css";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_networks=213"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center centre",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__discriptions">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadebottom"></div>
    </div>
  );
};
