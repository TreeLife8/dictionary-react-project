import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2 className="pt-3">{props.data.word}</h2>
        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              <Phonetic phonetic={phonetic} />
            </span>
          );
        })}
        {props.data.origin ? (
          <div className="word-summary">
            <h3 className="origin-title">origin</h3>
            <p className="origin">{props.data.origin}</p>
          </div>
        ) : (
          ""
        )}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
