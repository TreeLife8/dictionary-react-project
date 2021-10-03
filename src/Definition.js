import React from "react";
import "./Definitions.css";

export default function Definition(props) {
  if (props.definition.example) {
    return (
      <div className="Definition ms-4">
        <ul>
          <h6>Definition</h6>
          <li>{props.definition.definition}</li>
          <h6>Example</h6>
          <li>
            <em>{props.definition.example}</em>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Definition ms-4">
        <ul>
          <h6>Definition</h6>
          <li>{props.definition.definition}</li>
        </ul>
      </div>
    );
  }
}
