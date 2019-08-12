import React from 'react';
import './Box.css'


const Box = (props) => {
    return(
        <div className="Box">
            <h3>{props.label}</h3>      
        </div>
    );
}

export default Box;
