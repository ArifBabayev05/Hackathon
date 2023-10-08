import React, { useState } from 'react';
import './donateCard.css';

const DonateCard = ({ imageUrl, name, price, onIncrement }) => {
    const [amount, setAmount] = useState(0);

    const handleIncrement = (increment) => {
        const updatedAmount = Math.max(amount + increment, 0); // Ensure amount doesn't go below 0
        setAmount(updatedAmount);
        onIncrement(price * increment, name, updatedAmount);
    };

    return (
        <div className="donate-card">
            <div className="donate-circle">
                <div className="price-tag">${price}</div>
                <img src={imageUrl} alt="Community" className="donate-image" />
                <p className="donate-name">{name}</p>
            </div>
            <div className="amount-counter">
                <button className="decrement-button" onClick={() => handleIncrement(-1)}>
                    -
                </button>
                <span className="amount">{amount > 0 ? `${amount} x ${name}` : ''}</span>
                <button className="increment-button" onClick={() => handleIncrement(1)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default DonateCard;
