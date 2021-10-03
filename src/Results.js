import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    console.log(props.data);
    console.log(props.data.origin);
    return (
      <div className="Results">
        <h2 className="p-3">{props.data.word}</h2>
        <h3 className="phonetic p-3">
          <em>"{props.data.phonetic}"</em>
        </h3>{" "}
        <h3 className="phonetic-audio p-3">
          <a
            href={props.data.phonetics[0].audio}
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            audio
          </a>{" "}
        </h3>
        {props.data.origin !== undefined ? (
          <h3 className="origin-title">origin</h3>
        ) : (
          ""
        )}
        <p className="origin">{props.data.origin}</p>
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
