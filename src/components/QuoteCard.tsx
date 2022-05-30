import React from "react";
import UpArrow from "../svg-elements/up-arrow";
import DownArrow from "../svg-elements/down-arrow";

const QuoteCard = () => {
    return (
        <div className="card">

            <div className="voting">

                <div>
                    <UpArrow />
                </div>


                <div className="number">100</div>

                <div>
                    <DownArrow />
                </div>
            </div>

            <div className="quote">
                <div className="quote-text">
                    You haven’t got a letter on yours. I suppose she thinks you don’t forget your name.
                    But we’re not stupid — we know we’re called Gred and Forge.
                </div>
                <div className="quote-user">
                    <img className="quote-user-profile-picture" alt="" />
                    <div className="quote-user-name">George Weasley</div>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;