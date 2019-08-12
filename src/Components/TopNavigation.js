import React from 'react';
import "./TopNavigation.css";
import { NavLink } from "react-router-dom";

//Left aligns MuxPlex
const HeaderStyle = {
    float: 'left',
    fontSize: '50px',
    paddingTop: '5px',
    paddingLeft: '150px',
    fontWeight: 'bold'
}

const HeaderStyle2 = {
    fontSize: '15px',
    textAlign: 'left',
    float: 'left',
    marginTop: '50px',
    marginLeft: '-230px',
    textTransform: 'uppercase'
}

const TopNavigation = () => {  
    return(
        <div className="navbar">
            <ul>
                <NavLink to='/'>
                    <li style={HeaderStyle}>MuxPlex</li>
                </NavLink>
                <br></br>
                <li style={HeaderStyle2}>Activity from your favorite artists</li>
                <NavLink to='/explore' className="Links">
                    <li>Explore</li>                 
                </NavLink>
                <NavLink to='/contact' className="Links">
                    <li>Contact</li>
                </NavLink>
                <NavLink to='/about' className="Links">
                    <li>About</li>
                </NavLink>
                <NavLink to='/login' className="Links">
                    <li>Sign-Up/Login</li>
                </NavLink>              
            </ul>
            <div className="blocks">
                <header></header>
            </div>
        </div>
    );


}
export default TopNavigation;