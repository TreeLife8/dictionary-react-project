import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h4 className="phonetic">
          <em>"{props.phonetic.text}"</em>
        </h4>{" "}
        {props.phonetic.audio !== undefined ? (
          <h4 className="phonetic-audio">
            <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
              {" "}
              listen 🔉
            </a>
          </h4>
        ) : (
          ""
        )}
      </div>
    );
  }
}
