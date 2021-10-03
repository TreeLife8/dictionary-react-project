import React from "react";
import "./Definitions.css";

export default function Definition(props) {
  return (
    <div className="Definition ms-2">
      <ul>
        <li>{props.definition.definition}</li>
        <li>
          <em>{props.definition.example}</em>
        </li>
      </ul>
    </div>
  );
}
