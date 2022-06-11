import React from 'react';
import "./Hero.css";
import {Link} from "react-router-dom";

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero container-fluid pb-5">
                <div className="hero-content ms-5 text-light col-lg-6 col-md-12 col-sm-12 pt-5">
                    <h1>We Create, Build & Develop
                        The Tech Ecosystem</h1>
                    <p>Makers and Leaders Hub (MALhub) is an open, serene and beautiful shared workspace for
                        startups and entrepreneurs at lower cost than they would spend on space of their own. The hub
                        gives small businesses and ambitious entrepreneurs the platform to work and pursue their goals
                        in a revolutionary smart way.</p>
                    <Link to="" className="btn btn-primary mt-3 px-4">Learn More</Link>
                </div>
            </div>
        )
    }
}