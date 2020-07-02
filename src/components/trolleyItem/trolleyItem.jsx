import React from 'react';
import './trolleyItem.scss'

const TrolleyItem = ({ item, quantity }) => {
    const { name, imageUrl, price } = item;
    const localUrl = `/assets/images/${imageUrl}.jpg`;
    return (
        <div className="trolley-item">
            <div className="item-image"><img style={{ backgroundImage: `url(${localUrl})` }}></img>

            </div>
            <span className="item-name">{name}</span>
            <span className="item-cost">{quantity} x £{price}.00</span>
        </div>
    );
};

export default TrolleyItem;