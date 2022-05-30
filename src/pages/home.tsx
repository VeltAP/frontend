import React from "react";
import NavNotLogged from "../components/NavNotLogged";
import Footer from "../components/Footer";
import QuoteCard from "../components/QuoteCard";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="body">
            <NavNotLogged />
            <div className="landing-page wrap">
                <nav className="upper-container-home">
                    <nav className='welcome-text-container'>
                        <h1 className="h1">
                            Welcome to <span className="font-orange">Quotastic</span>
                        </h1>
                        <h5 className="h5">
                            Quotastic is free online platform for you to explore the quips,
                            quotes, and proverbs. Sign up and express yourself.
                        </h5>
                        <Link to='/signup' className="first-button">Sign up</Link>
                    </nav>
                    <nav className="image-container">
                        <div className="image-mid">
                            <QuoteCard />
                        </div>
                        <div className="image-top">
                            <QuoteCard />
                        </div>
                        <div className="image-bottom">
                            <QuoteCard />
                        </div>
                    </nav>
                </nav>


                <div className="box-row full h2 padding-five">
                    <div className="width">
                        Explore the world of{" "}
                        <span className="font-orange">fantastic quotes</span>
                    </div>
                </div>
                <div className="box-column full center-align">
                    <div className="h4 font-orange">Most upvoted quotes</div>
                    <div className="width">
                        Most upvoted quotes on the platform. Sign up or login to like the
                        quotes and keep them saved in your profile
                    </div>
                </div>
                <div className="box-row full quote-grid">
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                    <div className="quote-grid-card">
                        <QuoteCard />
                    </div>
                </div>
                <Link className="second-button lower-button" to="/signup">
                    Sign up for more
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Home;