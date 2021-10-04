import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-sm-4 mb-4">
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  className=" img-fluid"
                  key={index}
                  src={photo.src.landscape}
                  alt={props.keyword}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
