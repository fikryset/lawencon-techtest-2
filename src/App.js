import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MovieList from "./components/MovieList";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
