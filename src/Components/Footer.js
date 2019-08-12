import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            emailError: false,
            emailErrorMessage: ''           

        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//handles email address input
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

//handles submit input
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted by " + this.state.email);
    }

    render(){
        return(
            <div className="myFooter">
                <footer>
                    <div className="Footer-Content">
                        <div class="footer-section about">
                            <h1 className="my-h1">MuxPlex</h1>
                            <p>Muxplex is a fictional website designed to give users access to their favorite musicians social media accounts.</p>               
                        </div>
                        <div class="footer-section links">
                            <h2 id="my-h2">Quick Links</h2>
                            <ul>
                                <NavLink to='/about'>
                                    <li className="my-links">About</li>
                                </NavLink>
                                <NavLink to='/contact'>
                                    <li className="my-links">Contact</li>
                                </NavLink> 
                                <NavLink to='/explore'>
                                    <li className="my-links">Explore</li>
                                </NavLink> 
                                <NavLink>
                                    <li className="my-links">Terms+Conditions</li>
                                </NavLink> 
                                <NavLink>
                                    <li className="my-links">Privacy Policy</li>
                                </NavLink> 
                            </ul>
                        </div>
                        <div class="footer-section updates">
                            <h1 className="my-h1">BE THE FIRST TO KNOW!</h1>
                            <p>Sign up with your email address to receive all news and updates</p>
                            <input type="email" id="emailA" placeholder="Email Address" autoFocus onChange={this.handleEmailChange}></input>
                            <button id="footer-btn" onClick={ this.handleSubmit }>SIGN UP</button>                        
                        </div>
                    </div>
                    <div className="Footer-Bottom">
                        <p>Copyrighted 2019 | Designed by Tobe Akabogu</p>
                        
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;