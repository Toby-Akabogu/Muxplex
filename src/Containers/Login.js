import React from 'react';
import Footer from '../Components/Footer';
import TopNav from '../Components/TopNavigation';
import { Link } from "react-router-dom";
import './Login.css'


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleEmailAddressFieldChange = this.handleEmailAddressFieldChange.bind(this);
        this.handlePasswordFieldChange = this.handlePasswordFieldChange.bind(this);
        this.state = { 
            emailAddress: "",
            password: "",
            route: false
        };
    }

    /*
    * FUNCTION - handleEmailAddressFieldChange
    * PURPOSE - updates emailAddress state
    */
   handleEmailAddressFieldChange(e) {
    this.setState({
        emailAddress: e.target.value
    });
}

    /*
    * FUNCTION - handlePasswordFieldChange
    * PURPOSE - updates password state
    */
   handlePasswordFieldChange(e) {
    this.setState({
        password: e.target.value
    });
}

    /*
    * FUNCTION - resetForms
    * PURPOSE - resets forms after login button is pressed 
    */
    resetForms() {
        this.setState({emailAddress: ""});
        this.setState({password: ""});

    }


    render(){
        return(
            <div className="Login">
                <TopNav />
                <div className="card">
                    <h1>All Social Media Activity from talented artists</h1>
                </div>
                
                <form className="my-form">
                    <h2>Your account for everything Muxplex</h2>
                    <div className="InputBox">
                        <input type = "text" onChange={this.handleEmailAddressFieldChange} maxLength = "50" placeholder= "Email Address" autoFocus> 
                        </input>
                        <br></br>
                        <input type = "text" onChange={this.handlePasswordFieldChange} maxLength = "50" placeholder= "Password" > 
                        </input>
                    </div>
                        <br></br>
                        <input id = "Checkbox1" type = "checkbox" maxLength = "50" placeholder= "Password" >
                        </input>
                        <label for = "Checkbox1">Keep me logged in</label>
                        <a className="my-link">Forget Password?</a><br></br>
                        <p>By logging in, you agree to the membership terms of Muxplex.</p>
                        <button onClick={this.resetForms}>Login</button><br></br>
                        <p>Not a member? <Link to="/signup">Join now</Link></p>
    
                </form>
                <Footer />
            </div>
        );
    }

    
}




export default Login;