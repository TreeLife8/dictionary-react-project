import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  const [keyword, setKeyword] = useState(props.defaultKey);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState("");

  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001a02bc438556641a3a2c935473dc7113e`;
    let petexlUrl = `https://api.pexels.com/v1/search/?per_page=9&query=${keyword}`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(petexlUrl, { headers }).then(handlePexelResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(response) {
    setKeyword(response.target.value);
  }
  if (loaded) {
    console.log(photos);
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
              defaultValue={props.defaultKey}
              autoFocus={true}
              onChange={updateWord}
            ></input>
            <input className="btn" type="submit" value="search"></input>
          </form>
          <Results data={results} />
          {photos.length > 0 ? (
            <Photos photos={photos} keyword={keyword} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
