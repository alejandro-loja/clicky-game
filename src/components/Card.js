import React from "react";
import "./style.css";

function Card(props) {
  const {image, name, id, randomizeImgs} = props;
  return (
    <div onClick={() => randomizeImgs(id)} className="remove card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
}

export default Card;