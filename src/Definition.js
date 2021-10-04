import React from "react";
import "./Definitions.css";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition ms-2">
      <ul>
        <li>
          <strong>Definition:</strong> {props.definition.definition}
        </li>
        <li className="example">
          <em>
            {props.definition.example !== undefined ? (
              <strong>Example:</strong>
            ) : (
              ""
            )}{" "}
            {props.definition.example}
          </em>
        </li>
        <li>
          <Synonyms synonyms={props.definition.synonyms} />
        </li>
      </ul>
    </div>
  );
}
