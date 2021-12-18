import React from "react";

const SearchBar = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 m-2">
        <div className="input-group-prepend">
          <input
            className="form-control"
            placeholder="Search movie title..."
            value={props.value}
            onChange={(event) => props.setSearch(event.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
