import ShopCard from "./ShopCard";
import React from "react";

function CardsView(props) {
   const {cards} = props;
   return (
       cards.map((card) => <ShopCard card={card}/>)
   )
}
export default CardsView;