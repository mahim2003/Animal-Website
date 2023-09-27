import React from "react";

import {Link} from "react-router-dom";
function Card({title, imageUrl,body, link}){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className="btn">
                <Link to={link}>
                    <button>
                        View Project
                    </button>
                </Link>
            </div>
            
        </div>
    );
}

export default Card;