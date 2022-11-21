import React from "react";
import "./Row.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "./features/counter/userSlice";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      setMovies(data.results);

      return response;
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => {
                  dispatch(
                    addMovie({
                      link: movie.backdrop_path,
                      name: movie.name,
                      backupName: movie.original_title,
                      discription: movie.overview,
                      imbd: movie.vote_average,
                    })
                  );
                  navigate("/movie");
                }}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};
