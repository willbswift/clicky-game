import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <span onClick={() => props.scoring(props.id)} className="scoring">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </span>
  );
}

export default FriendCard;
