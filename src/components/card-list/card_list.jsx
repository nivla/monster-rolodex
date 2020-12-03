import React from "react";
import "./card_list.styles.css";
import Card from "../card/card";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
