import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  const [keyword, setKeyword] = useState(props.defaultKey);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(response) {
    setKeyword(response.target.value);
  }
  if (loaded) {
    return (
      <div className="Search">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center"
          >
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
  } else {
    load();
    return "Loading";
  }
}
