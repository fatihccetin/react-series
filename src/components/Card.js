import React from "react";
import '../sass/index.scss';

const Card = (props) => {
    console.log(props);
    return (
        
            <div className="card">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h5 className ="card-title">{props.cardTitle}</h5>
                    <p className ="card-text">{props.cardText}</p>
                    </div>
                    <div className ="card-footer">
                    <small className ="text-muted">{props.updatedTime}</small>
                    </div>
                </div>
        
    );
};

export default Card;