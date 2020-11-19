import React from "react";

function ShopCard(props) {
    const {card} = props;
    return (
        <div className='ShopCard'>
            <span className='name'>{card.name.toUpperCase()}</span>
            <span className='colored'>{card.colored}</span>
            <img className='img' src={card.img} alt={card.name}/>
            <div className='ShopCardFooter'>
                <span className='price'>${card.price}</span>
                <button className='btn'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;