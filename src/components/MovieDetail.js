import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovies = (id) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=715289b&i=${id}`)
      .then(function (response) {
        // handle success
        // console.log(response);
        if (response.data) {
          setMovieDetail(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getMovies(id);
  }, [id]);

  return (
    //Formatting sourced from Bootstrap Template, startbootstrap
    <div className="container px-4 px-lg-5 my-5">
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0"
            src={movieDetail.Poster}
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="small mb-1">Rating: {movieDetail.Metascore}</div>
          <h1 className="display-5 fw-bolder">{movieDetail.Title}</h1>
          <div className="fs-5 mb-5">
            <span className="text-decoration-line-through">
              {movieDetail.Released}
            </span>
          </div>
          <p className="lead">{movieDetail.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
