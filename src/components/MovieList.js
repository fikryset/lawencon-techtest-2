import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { searching } from "../features/search";

const MovieList = (props) => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(searchValue);
  const [pageNo, setPageNo] = useState(1);

  const getMovies = async (search, page) => {
    await axios
      .get(`http://www.omdbapi.com/?apikey=715289b&s=${search}&page=${page}`)
      .then(function (response) {
        // handle success
        // console.log(response);
        if (response.data.Search) {
          setMovies(response.data.Search);
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

  const scrollCheck = (e) => {
    console.log("scrolling");
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("End scroll");
    }
  };

  const addPage = () => {
    var currentPage = pageNo;
    setPageNo((currentPage += 1));
  };

  useEffect(() => {
    dispatch(searching(search));
  }, [search, dispatch]);

  useEffect(() => {
    getMovies(search, pageNo);
    window.scrollTo(0, 0);
  }, [search, pageNo]);

  return (
    <div onScroll={scrollCheck}>
      <SearchBar value={search} setSearch={setSearch} />
      <div className="row justify-content-center">
        {movies.map((movie, index) => (
          <li key={movie.imdbID} className="card my-4 col-4 m-3 text-center">
            <MovieItem
              Poster={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
              ID={movie.imdbID}
            />
          </li>
        ))}
      </div>
      <div className="row justify-content-center">
        <button className="btn-primary col-6" onClick={addPage}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default MovieList;
