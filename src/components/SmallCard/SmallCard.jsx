import React from 'react';
import './SmallCard.css';
function SmallCard({onClick}){
    return (
        <div className="smallcard" onClick={onClick}>
            <div className="card-back">Mahim</div>
            <div className="card-front">What's my name?</div>

        </div>
    );
}

export default SmallCard;