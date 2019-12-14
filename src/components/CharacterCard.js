import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} />
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </div>
  )
}
