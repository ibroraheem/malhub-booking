import React from 'react';
import "./Footer.css"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer container-fluid mt-3">
                <div className="d-flex flex-wrap mx-5 footer-wrapper justify-content-between ">
                    <div className="about">
                        <h3 className="text-primary pt-3 ">About us</h3>
                        <ul>
                            <li>Innovation Hub</li>
                            <li>Startups</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <div className="links pt-3">
                        <h3 className="text-primary">Quick Links</h3>
                        <ul>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="contact pt-3">
                        <h3 className="text-primary">MALhub</h3>
                        <p className=""> MALhub is an open, serene and
                            beautiful shared workspace for
                            startups and entrepreneurs at
                            lower cost.</p>
                        <div className="social-media text-light d-flex pb-1 ">
                            <i className="fa-brands bg-primary px-2 fa-facebook-f mx-1"></i>
                            <i className="fa-brands bg-primary fa-instagram mx-1"></i>
                            <i className="fa-brands bg-primary fa-linkedin-in mx-1"></i>
                            <i className="fa-brands bg-primary fa-twitter mx-1"></i>
                        </div>
                        <p className="">Legal Privacy Policy</p>
                    </div>
                </div>
            </div>
        )
    }
}