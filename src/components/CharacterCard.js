import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
      <p>Status: {props.character.status}</p>
    </div>
  )
}
