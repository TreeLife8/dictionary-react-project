import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(results);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
            autoFocus={true}
            onChange={updateWord}
          ></input>
          <input className="btn" type="submit" value="search"></input>
        </form>
        <Results data={results} />
      </div>
    </div>
  );
}
