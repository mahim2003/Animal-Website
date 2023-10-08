import React, {useState} from 'react';
import "../styles/FlipCard.css";
import SmallCard from './SmallCard/SmallCard.jsx';
import {CSSTransition} from 'react-transition-group';
function FlipCard(){
    const[showFront, setShowFront] =useState(true);
    return (
        <div className="flip-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <SmallCard onClick={() => {
                   setShowFront((v)=> !v); 
                }}/>
            </CSSTransition>
            
        </div>
    );
}

export default FlipCard;