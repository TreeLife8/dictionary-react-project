import React from "react";
import "./Definitions.css";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition ms-2">
      <ul>
        <li>{props.definition.definition}</li>
        <li className="example">
          {props.definition.example !== undefined ? (
            <strong>example:</strong>
          ) : (
            ""
          )}{" "}
          <em>{props.definition.example}</em>
        </li>
        <li>
          <Synonyms synonyms={props.definition.synonyms} />
        </li>
      </ul>
    </div>
  );
}
