import React from 'react';


const Card = (props) => {
    return(
        <div className="Card">
            <h2>{props.header}</h2>
            <p>{props.text}</p>       
        </div>
    );
}

export default Card;
