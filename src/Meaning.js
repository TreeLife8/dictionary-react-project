import React from "react";
import Definition from "./Definition";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="mt-4 pt-3">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition definition={definition} />
          </div>
        );
      })}
    </div>
  );
}
