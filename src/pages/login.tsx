import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";
import Footer from "../components/Footer";
import NavForSignIn from "../components/NavForSignIn";
import SignUpBackground from "../svg-elements/signup-background";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const {data} = await axios.post('login', {
            email,
            password
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to={'/'}/>;
    }

    return (
        <div className="signup-page">
            {/*<nav className="content">*/}
            <NavForSignIn />
            <div className="signup-background">
                <SignUpBackground/>
            </div>
                <nav className="signup-form">
                    {/*<nav className="upper-part">*/}
                        <h1 className="h4">Welcome <span className="font-orange">back!</span></h1>
                        <p className="h6">
                            Thank you for comming back. Hope you have a good day and inspire
                            others.
                        </p>
                    {/*</nav>*/}

                    <form className="form-container" onSubmit={submit}>
                        <label className="form-label">Email</label>
                        <input
                            className="sign-up-form-input second-button placeholder"
                            type="text"
                            name="email"
                            placeholder="example@net.com"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <label className="form-label">Password</label>
                        <input
                            className="sign-up-form-input second-button placeholder"
                            type="password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="sign-up-form-input second-button">Login</button>
                    </form>
                </nav>
            {/*</nav>*/}
            <Footer/>
        </div>
    );
};

export default Login;