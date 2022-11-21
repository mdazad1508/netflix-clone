import React from "react";
import { Nav } from "./Nav";
import "./Movie.css";
import { useSelector } from "react-redux";

export const Movie = () => {
  const myMovie = useSelector((state) => state.user.movie);
  console.log(myMovie);
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="movie">
      <Nav />
      <div
        className="movie__details"
        style={{
          backgroundImage: `url("${base_url}${myMovie.link}")`,
          maxHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          opacity: "0.9",
        }}
      >
        <h1>{myMovie.name}</h1>
        <button className="movie__button">Play</button>
        <div className="imbd">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/08/Imdb-Logo-2012.png"
            alt=""
          />
        </div>

        <h3>{myMovie.discription}</h3>
      </div>
    </div>
  );
};

//<img src={`${base_url}${myMovie.link}`} alt=""></img>
