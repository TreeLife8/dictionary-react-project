import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Dictionary from "./Dictionary";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [dictionaryData, setDictionaryData] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setDictionaryData({
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
      origin: response.data[0].origin,
      meaning: {
        definitionOne: {
          definition: response.data[0].meanings[0].definitions[0].definition,
          example: response.data[0].meanings[0].definitions[0].example,
        },
        definitionTwo: {
          definition: response.data[0].meanings[0].definitions[1].definition,
          example: response.data[0].meanings[0].definitions[1].example,
        },
      },
    });
    console.log(dictionaryData);
    console.log(response.data[0].meanings[0].definitions[0].definition);
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
            autoComplete={true}
            autoFocus={true}
            onChange={updateWord}
          ></input>
          <input className="btn btn-light" type="submit" value="search"></input>
        </form>
        <Dictionary data={dictionaryData} />
      </div>
    </div>
  );
}
