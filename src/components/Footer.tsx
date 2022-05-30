import React from "react";
import LogoFooter from "../svg-elements/logo-footer";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <LogoFooter />
            </div>

            <div className="content footer-text font-white">
                All Rights Reserved | skillupmentor.com
            </div>
        </div>
    );
};

export default Footer;