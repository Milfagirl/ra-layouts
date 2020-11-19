import React from "react";

function ShopItem(props) {
    const {card} = props;
    return (
        <div className='ShopItem'>
            <img className='img' src={card.img} alt={card.name}/>
            <span className='name'>{card.name.toUpperCase()}</span>
            <span className='colored'>{card.colored}</span>
            <span className='price'>${card.price}</span>
            <button className='btn'>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;