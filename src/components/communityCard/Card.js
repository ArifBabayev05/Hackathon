import React from 'react'
import "./card.css"
const Card = ({ imageUrl, name }) => {
    return (
        <div className="community-card">
            <div className="circle">
                <img src={imageUrl} alt="Community" className="community-image" />
            </div>
            <p className="community-name">{name}</p>
        </div>
    );
}

export default Card;