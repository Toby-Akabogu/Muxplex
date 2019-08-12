import React from 'react';
import TopNav from '../Components/TopNavigation';
import Footer from '../Components/Footer';
import './Signup.css'

const text1 = 'Create your account and get access to all your favorite artists social media profiles in one destination.';
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.handleFirstNameFieldChange = this.handleFirstNameFieldChange.bind(this);
        this.handleLastNameFieldChange = this.handleLastNameFieldChange.bind(this);
        this.handleEmailFieldChange = this.handleEmailFieldChange.bind(this);
        this.handlePasswordFieldChange = this.handlePasswordFieldChange.bind(this);
        this.handlePasswordConfirmFieldChange = this.handlePasswordConfirmFieldChange.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
            password: "",
            passwordConfirm: "",
        };

    }
    
    /*
    * FUNCTION - arePasswordsSame
    * PURPOSE - returns a boolean determing if passwords are the same.
    */
   arePasswordsSame() {
    var same = false;
    if (this.state.password.trim() === this.state.passwordConfirm.trim()) {
        same = true;
    }
    return same
}

    /*
    * FUNCTION - handleFirstNameFieldChange
    * PURPOSE - updates firstName state
    */
    handleFirstNameFieldChange(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    /*
    * FUNCTION - handleLastNameFieldChange
    * PURPOSE - updates lastName state
    */
   handleLastNameFieldChange(e) {
    this.setState({
        lastName: e.target.value
    });
}

    /*
    * FUNCTION - handleEmailFieldChange
    * PURPOSE - updates email state
    */
   handleEmailFieldChange(e) {
    this.setState({
        email: e.target.value
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
    * FUNCTION - handlePasswordConfirmFieldChange
    * PURPOSE - updates passwordConfirm state
    */
   handlePasswordConfirmFieldChange(e) {
    this.setState({
        passwordConfirm: e.target.value
    });
}

    render(){
        return(
            <div className="Signup">
                <TopNav />
                <div className="card">
                    <h1>All Social Media Activity from talented artists</h1>
                </div>
                        <form className="my-form">
                            <div className="Container">
                                <h1 className="my-header">Become a muxplex member</h1>
                                <p>{text1}</p>
                                <input type="text" onChange={this.handleFirstNameFieldChange} name="firstName" placeholder="First Name"></input>
                                <input type="text" onChange={this.handleLastNameFieldChange} name="lastName" placeholder="Last Name"></input>
                                <input type="date" name="dateOfBirth" placeholder="mm/dd/yyyy"></input>
                                <input type="email" onChange={this.handleEmailFieldChange} name="email" placeholder="Email Address"></input>
                                <input type="password" onChange={this.handlePasswordFieldChange} name="password" placeholder="password"></input>
                                <input type="password" onChange={this.handlePasswordConfirmFieldChange} name="passwordConfirm" placeholder="Confirm password"></input>
                                <p>By creating an account you agree to our Terms & Privacy</p>
                                <button type="button">Cancel</button>
                                <button type="submit" className="submitBtn">Submit</button>
                            </div>
                        </form>
                <Footer />

            </div>

        );
    }


}

export default Signup;