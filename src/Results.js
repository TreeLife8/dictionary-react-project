import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2 className="p-3">{props.data.word}</h2>
        <h2 className="phonetic p-3">
          <em>"{props.data.phonetic}"</em>
        </h2>{" "}
        <h2 className="phonetic-audio p-3">
          <a
            href={props.data.phonetics[0].audio}
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            audio 🔉
          </a>{" "}
        </h2>
        <div className="word-summary">
          {props.data.origin ? <h3 className="origin-title">origin</h3> : ""}
          <p className="origin">{props.data.origin}</p>
        </div>
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
