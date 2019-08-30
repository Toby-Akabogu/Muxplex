import React from 'react';
import TopNav from '../Components/TopNavigation';
import Footer from '../Components/Footer';
import ARI from '../Pictures/ARI.jpg';
import './Signup.css'
import axios from 'axios';

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
            sFirstName: "",
            sLastName: "",
            sDateOfBirth: "",
            sEmail: "",
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
            sFirstName: e.target.value
        });
    }

    /*
    * FUNCTION - handleLastNameFieldChange
    * PURPOSE - updates lastName state
    */
   handleLastNameFieldChange(e) {
    this.setState({
        sLastName: e.target.value
    });
}

    /*
    * FUNCTION - handleEmailFieldChange
    * PURPOSE - updates email state
    */
   handleEmailFieldChange(e) {
    this.setState({
        sEmail: e.target.value
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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post('http://localhost:3000/signup', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    render(){
        const { sEmail, sFirstName, sLastName, password, passwordConfirm } = this.state;
        return(
            <div className="Signup">
                <TopNav />
                <div className="card">
                    <h1>All Social Media Activity from talented artists</h1>
                </div>
                    <div className="my-img">
                        <img src = { ARI } alt="Ariana Grande" />
                    </div>
                    <form className="my-form" onSubmit = { this.handleSubmit }>
                        <h1 className="my-header">Become a muxplex member</h1>
                        <p>{ text1 }</p>
                        <input type="text"
                        className="input-fields"
                        onChange={this.handleFirstNameFieldChange}
                        name="sFirstName"
                        value = { sFirstName }
                        placeholder="First Name"
                        >
                        </input>

                        <input type="text"
                        onChange={this.handleLastNameFieldChange}
                        className="input-fields"
                        name="sLastName"
                        value = { sLastName }
                        placeholder="Last Name"
                        >
                        </input>

                        <input type="date"
                        className="input-fields"
                        name="sDateOfBirth"
                        placeholder="mm/dd/yyyy"
                        >
                        </input>

                        <input type="email"
                        className="input-fields"
                        onChange={this.handleEmailFieldChange}
                        name="sEmail"
                        value = { sEmail }
                        placeholder="Email Address"
                        >
                        </input>

                        <input type="password"
                        className="input-fields"
                        onChange={this.handlePasswordFieldChange}
                        name="password"
                        value = { password }
                        placeholder="password"
                        >
                        </input>

                        <input type="password"
                        className="input-fields"
                        onChange={this.handlePasswordConfirmFieldChange}
                        name="passwordConfirm"
                        value = { passwordConfirm }
                        placeholder="Confirm password"
                        >
                        </input>

                        <p>By creating an account you agree to our Terms & Privacy</p>
                        <button type="button">Cancel</button>
                        <button type="submit" className="submitBtn">Submit</button>
                    </form>

                <Footer />
            </div>

        );
    }


}

export default Signup;