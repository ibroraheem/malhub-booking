import React from 'react';
import "./Service.css";
import training from "../../images/training.png";
import workspace from "../../images/workspace.png";
import events from "../../images/event.png";
import { Link } from "react-router-dom";

export default class Service extends React.Component {
    render() {
        return (
            <div>
                <div className="service container-fluid pb-5" id="services">
                    <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5">Our Services</h1>
                    <div className="service-cards d-flex flex-wrap justify-content-around">
                        <div className="service-card pb-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="service-card-content">
                                <img src={training} className="card-img-top" alt="Training" />
                                <div className="card-body text-center">
                                    <h5 className="card-title ">Training</h5>
                                    <p className="card-text">We provide training for startups and entrepreneurs to build their
                                        business and grow their business.</p>
                                    <Link to="/training" className="btn btn-primary px-5 mt-1">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-card pb-3 col-lg-4 col-md-4 col-sm-6 ">
                            <div className="service-card-content">
                                <img src={events} className="card-img-top" alt="Event Space" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Event Space</h5>
                                    <p className="card-text">We provide training for startups and entrepreneurs to build their
                                        business and grow their business.</p>
                                    <Link to="/event" className="btn btn-primary px-5 mt-1">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-card pb-3 col-lg-4 col-md-4 col-sm-6 ">
                            <div className="service-card-content">
                                <img src={workspace} className="card-img-top" alt="Training" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Workspace</h5>
                                    <p className="card-text">We provide training for startups and entrepreneurs to build their
                                        business and grow their business.</p>
                                    <Link to="/workspace" className="btn btn-primary px-5 mt-1">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5">Testimonials</h1>
                <div className="testimonial container-fluid d-flex">
                    <div className="testimonial-card"></div>
                    <div className="testimonial-card"></div>
                    <div className="testimonial-card"></div>
                </div>
            </div>
        )
    }
}