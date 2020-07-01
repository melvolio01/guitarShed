import React from 'react';
import './checkoutItem.scss';

const CheckoutItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const localUrl = `/assets/images/${imageUrl}.jpg`;
    return (
        <div className="checkout-item">
            <div className="item-image" style={{ backgroundImage: `url(${localUrl})` }}>
            </div>
            <h4>{name} £{price}</h4>
            <div className="quantity-control">
            </div>
        </div>
    );
};

export default CheckoutItem;