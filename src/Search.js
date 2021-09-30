import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    console.log(`searching for ${keyword}`);
  }
  function updateWord(response) {
    setKeyword(response.target.value);
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
            onChange={updateWord}
          ></input>
          <input className="btn btn-light" type="submit" value="search"></input>
        </form>
      </div>
    </div>
  );
}
