import React from "react";
import "./Search.css";

export default function Search() {
  function search(event) {
    event.preventDefault();
    console.log("searching");
  }
  return (
    <div className="Search">
      <div className="container">
        <form onSubmit={search} className="d-flex justify-content-center">
          <input
            type="search"
            className="form form-control"
            placeholder="enter a word"
            autoComplete={true}
            autoFocus={true}
          ></input>
          <input className="btn btn-light" type="submit" value="search"></input>
        </form>
      </div>
    </div>
  );
}
