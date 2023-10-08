import React from 'react';
import './SmallCard.css';
function SmallCard({onClick, frontText, backContent}){
    return (
        <div className="smallcard" onClick={onClick}>
            <div className="card-back">
            {backContent.image && <img src={backContent.image} alt="Back Image" className="back-image" />}
            {backContent.text && <p className="back-text">{backContent.text}</p>}  
            </div>
            <div className="card-front">{frontText}</div>

        </div>
    );
}

export default SmallCard;