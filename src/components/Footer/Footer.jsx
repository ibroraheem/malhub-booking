import React from 'react';
import "./Footer.css";
import fb from "../../images/fb.png"
import ig from "../../images/ig.png"
import ln from "../../images/in.png"
import tw from "../../images/tw.png"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer container-fluid mt-5">
                <div className="d-flex flex-wrap justify-content-between footer-wrapper ">
                    <div className="about col-lg-4 col-sm-12 col-md-12">
                        <h3 className="text-primary pt-3 ">About us</h3>
                        <ul>
                            <li>Innovation Hub</li>
                            <li>Startups</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <div className="links pt-3 col-lg-4 col-sm-12 col-md-12">
                        <h3 className="text-primary">Quick Links</h3>
                        <ul>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="contact col-lg-4 col-sm-12 col-md-6 pt-3">
                        <h3 className="text-primary">MALhub</h3>
                        <p className=""> MALhub is an open, serene and
                            beautiful shared workspace for
                            startups and entrepreneurs at
                            lower cost.</p>
                        <div className="social-media text-light d-flex pb-1 ">
                            <img src={fb} alt="Facebook" className="icon" />
                            <img src={ig} alt="Facebook" className="icon ms-2" />
                            <img src={ln} alt="Facebook" className="icon ms-2" />
                            <img src={tw} alt="Facebook" className="icon ms-2" />
                        </div>
                        <p className="">Legal Privacy Policy</p>
                    </div>
                </div>
            </div>
        )
    }
}