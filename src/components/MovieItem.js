import React from "react";
import { useState } from "react";
import ModalPoster from "./ModalPoster";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const posterClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="row p-2 justify-content-center">
      <div className="col-12">
        <img
          className="img-fluid"
          src={props.Poster}
          alt="movie"
          onClick={posterClickHandler}
        ></img>
      </div>
      <div className="col-12">
        {props.Title} - {props.Year}
      </div>
      <div className="col-12 my-1">
        <Link to={`/movie/${props.ID}`}>
          <button className="btn">Detail</button>
        </Link>
      </div>
      {showModal && <ModalPoster poster={props.Poster} title={props.Title} />}
    </div>
  );
};

export default MovieItem;
