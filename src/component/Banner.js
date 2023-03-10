
// import axios from './axios';
import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../Banner.css"
// import axios from "./axios";

function Banner() {
const [movie, setMovie] = useState([]);
useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // these two lines simplifies with one string
        // generates a random movie or renders a random movie for the banner
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <header className="banner"
         style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
 
    >
      <div className="banner__contents">
        <h1>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        {(movie?.overview)}
        </h1>
      </div>

      

   
    </header>
  );
}

export default Banner;
