import React from 'react';
import './Contact.css'
import TopNav from '../Components/TopNavigation';
import Footer from '../Components/Footer';


const CONTACT = 'Our team at muxplex is committed to providing the best user experience possible. If you have any feedback, questions, or concerns please Contact us below.';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            conFirstName: '',
            conLastName: '',
            conEmail: '',
            emailError: false,
            emailErrorMessage: '',
            conMessage: '',
            conPhoneNumber: '',
            phoneNumberError: false,
            phoneNumberMessage: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    }


    //handles first name input
    handleFirstNameChange = (e) => {
        this.setState({
            conFirstName: e.target.value
        });
    }

    //handles last name input
    handleLastNameChange = (e) => {
        this.setState({
            conLastName: e.target.value
        });
    }

    //handles email address input
    handleEmailChange = (e) => {
        this.setState({
            conEmail: e.target.value
        });
    }

    //handles phone number change
    handlePhoneNumberChange = (e) => {
        this.setState({
            conPhoneNumber: e.target.value
        });
    }

    //handles message change
    handleMessageChange = (e) => {
        this.setState({
            conMessage: e.target.value
        });
    }

    //resets the form to empty values when submitted successfully
    resetForm() {
        this.setState({
            conFirstName: '',
            conLastName: '',
            conEmail: '',
            emailError: false,
            emailErrorMessage: '',
            conMessage: '',
            conPhoneNumber: '',
            phoneNumberError: false,
            phoneNumberMessage: ''

        })

    }

    //handle submit
    handleSubmit = (e) => {
        fetch('http://localhost:3000/contact', {
            method: 'post',
            headers: {'Contact-Type': 'application/json'},
            body: JSON.stringify({
                firstName: this.state.conFirstName,
                lastName: this.state.conLastName,
                email: this.state.conEmail,
                phoneNumber: this.state.conPhoneNumber,
                message: this.state.conMessage                
            })
        })
        console.log("Form submitted by " + this.state.conFirstName);
        this.resetForm();
    }


    render(){
        return(
            <div>
                <TopNav />
                <div className="card">
                    <h1>CONTACT US</h1>
                    <p>{CONTACT}</p>
                </div>
                <form className="myForm" onSubmit={ this.handleSubmit }>
                    <div class="Inputs">
                        <label for="fname">First Name</label>
                        <br></br>
                        <input type="text" name='firstName' value={this.state.firstName} id="fname" placeholder="First Name" onChange={this.handleFirstNameChange} autoFocus />
                        <br></br>
                        <br></br>

                        <label for="lname">Last Name</label>
                        <br></br>
                        <input type="text" name='lastName' value={this.state.lastName} id="lname" placeholder="Last Name" onChange={this.handleLastNameChange} />
                        <br></br>
                        <br></br>

                        <label for="email">Email Address</label>
                        <br></br>
                        <input type="email" name='email' value={this.state.email} id="email" placeholder="Email Address" onChange={this.handleEmailChange} />
                        <br></br>
                        <br></br>

                        <label for="pnumber">Phone Number</label>
                        <br></br>
                        <input type="number" name='phoneNumber' value={this.state.phoneNumber} id="pnumber" placeholder="Phone Number" onChange={this.handlePhoneNumberChange} />
                        <br></br>
                        <br></br>
                    </div>
                    <label for="message">Message</label>
                    <br></br>
                    <textarea onChange={this.handleMessageChange} name='message' cols="35" rows="5"></textarea>
                    <br></br>
                    <br></br>
                    <button class="my-btn">Send</button>
                </form>
                <Footer />
            </div>
        );
    }

    
}

export default Contact;