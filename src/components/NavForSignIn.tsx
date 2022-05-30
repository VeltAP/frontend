import React from "react";
import {Link} from "react-router-dom";
import Logo from "../svg-elements/logo";

const NavNotLogged = () => {
    return (
        <div className="nav-bar">
            <div>
                <Logo />
            </div>
            <div className="right-side">
                <Link to='/signup' className="first-button">Sign up</Link>
            </div>
        </div>
    );
};

export default NavNotLogged;
