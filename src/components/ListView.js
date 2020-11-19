import ShopItem from "./ShopItem";
import React from "react";

function ListView(props) {
    const {cards} = props;
    return (
        cards.map((card) => <ShopItem card={card}/>)
    )
}

export default ListView;