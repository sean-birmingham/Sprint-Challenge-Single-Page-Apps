import React from "react";
import styled from "styled-components";

const RMCard = styled.div`
  width: 500px;
  background: #191919;
  color: #FFD25A;
  margin: 5px auto;
  padding: 10px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12),
  0 2px 5px 1px rgba(0, 0, 0, 0.24);
  text-align: center;
`

export default function CharacterCard(props) {
  return (
    <RMCard>
      <h2>{props.name}</h2>
      <img className="main-img" src={props.image} />
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </RMCard>
  )
}
