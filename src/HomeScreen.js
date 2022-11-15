import React from "react";
import "./HomeScreen.css";
import { Nav } from "./Nav";
import { Banner } from "./Banner";
import { Row } from "./Row";

export const HomeScreen = () => {
  return (
    <div className="homescreeen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_networks=213"
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3cd7b89f0b27b0d9b1857470279e660b&language=en-US"
      />
      <Row
        title="Top Rated"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=3cd7b89f0b27b0d9b1857470279e660b&language=en-US"
      />
      <Row
        title="Action Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_genres=28"
      />
      <Row
        title="Comedy Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_genres=35"
      />
      <Row
        title="Horror Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_genres=27"
      />
      <Row
        title="Romance Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_genres=10749"
      />
      <Row
        title="Documentries"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=3cd7b89f0b27b0d9b1857470279e660b&with_genres=99"
      />
    </div>
  );
};
