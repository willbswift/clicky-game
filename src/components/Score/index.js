import React from "react";
import "./style.css";

function Score(props) {
  return <h1 className="score">Score is {props.children}</h1>;
}

export default Score;
