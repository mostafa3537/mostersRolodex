import "./card.css";
import React from "react";

const Card = (props) => (
  <div className="card-container">
    <h1>{props.monster.name} </h1>
    <img alt="0" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
  </div>
);

export default Card;
