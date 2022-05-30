import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';
import {Link, Navigate} from "react-router-dom";
import Footer from "../components/Footer";
import NavNotLogged from "../components/NavNotLogged";
import NavForSignUp from "../components/NavForSignUp";
import SignUpBackground from "../svg-elements/signup-background";

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';
    state = {
        redirect: false
    };

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log();

        await axios.post('register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        })

        this.setState({
            redirect: true
        })
    }

    render() {

        if (this.state.redirect) {
            return <Navigate to={'/login'}/>;
        }

        return (
            <div className="signup-page">
                <NavForSignUp />
                <div className="signup-background">
                    <SignUpBackground/>
                </div>
                <div className="signup-form">
                    <h1 className="h4">What is your <span className='font-orange'>name?</span></h1>
                    <p className="h6">
                        Your name will appear on quotes and your public profle.
                    </p>
                    <img className="quote-user-profile-picture-for-signup" />
                    <form className='form-container-sign-up' onSubmit={this.submit}>
                        <nav className="form-container">
                            <label className="form-label">Email</label>
                            <input
                                className="sign-up-form-input second-button placeholder"
                                type="text"
                                name="email"
                                placeholder="example@net.com"
                                onChange={e => this.email = e.target.value}
                            />
                        </nav>

                        <nav className='name-container'>
                            <nav className="form-label">
                                <label>First Name </label>
                                <input
                                    className="sign-up-form-input-smaller second-button placeholder"
                                    type="text"
                                    name="firstName"
                                    placeholder="John"
                                    onChange={e => this.first_name = e.target.value}
                                />
                            </nav>
                            <nav className="form-label">
                                <label>Last Name</label>
                                <input
                                    className="sign-up-form-input-smaller second-button placeholder"
                                    type="text"
                                    name="lastName"
                                    placeholder="Scott"
                                    onChange={e => this.last_name = e.target.value}
                                />
                            </nav>
                        </nav>
                        <nav className="form-container">
                            <label className="form-label">Password</label>
                            <input
                                className="sign-up-form-input second-button placeholder"
                                type="password"
                                name="password"
                                onChange={e => this.password = e.target.value}
                            />
                        </nav>
                        <nav className="form-container">
                            <label className="form-label"> Confirm password</label>
                            <input
                                className="sign-up-form-input second-button placeholder"
                                type="password"
                                name="repeatedPassword"
                                onChange={e => this.password_confirm = e.target.value}
                            />
                        </nav>
                        <button className="sign-up-form-input first-button" type="submit">Sign up</button>
                    </form>
                    <nav className='sign-in-offer'>
                        <nav className='lower-part'>
                            <p>Already have an account?
                                <Link to='/login' className="sign-in-offer-link">
                                    Sign in
                                </Link>
                            </p>
                        </nav>
                    </nav>

                </div>
                <Footer />
            </div>
        );
    };
};



export default Register;