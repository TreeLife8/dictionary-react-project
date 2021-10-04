import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms pt-1">
        <ul>
          <strong className="title">Synonyms:</strong>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonyms" key={index}>
                {synonym},
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
