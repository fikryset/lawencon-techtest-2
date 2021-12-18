import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link to={"/"}>
        <div className="navbar-brand">Movie List</div>
      </Link>
    </nav>
  );
};

export default Header;
