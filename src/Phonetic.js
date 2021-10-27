import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    function playAudio() {
      new Audio(`${props.phonetic.audio}`).play();
    }
    return (
      <div className="Phonetic">
        <h4 className="phonetic">
          <em>"{props.phonetic.text}"</em>
        </h4>{" "}
        {props.phonetic.audio !== undefined ? (
          <button className="audio">
            <h4 onClick={playAudio} className="phonetic-audio">
              listen 🔉
            </h4>
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
