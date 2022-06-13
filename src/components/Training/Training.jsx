import React from 'react';
import "./Training.css";
import Navbar from "../Navbar/Navbar";
import toon from "../../images/toon.png"
import Footer from "../Footer/Footer";
import close from "../../images/close.png"

export default class Training extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="training-hero container-fluid">
                    <div className=" text-center text-light">
                        <h1>We Create, Build & Develop
                            The Tech Ecosystem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique egestas aliquam adipiscing lectus sagittis. Dui faucibus interdum rhoncus tellus erat pellentesque nulla. Et vel sagittis interdum velit pellentesque amet. Varius pulvinar egestas purus, libero urna malesuada amet mauris. Turpis tellus quis eget velit sed in ac.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div className="container-fluid training-content">
                    <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5">Training</h1>
                    <p className="text-center  mt-5 training-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, fermentum orci mauris mi adipiscing. Mauris, in diam facilisis proin quam quis ultrices viverra nunc. Interdum nisl neque, sed massa integer sed nibh risus. Facilisis sagittis pellentesque eget sit facilisis nibh. Nibh vitae sagittis lacus et consequat pharetra, egestas. Nascetur suspendisse maecenas sed ultrices. Ac at sit risus magna nisi sed duis integer. Amet turpis pellentesque ultrices nec id libero aliquet ac.
                        Facilisis at est, quis elit, a id eu porta. Maecenas maecenas sed duis pharetra hac a augue. Ut ultricies nibh cras quis auctor consequat, mattis tristique neque. Lacus consequat felis, euismod gravida mattis elementum. Sagittis, semper nulla ac pellentesque pulvinar.
                        Lectus hendrerit non iaculis egestas fermentum vitae eros, quis risus. A mauris mattis consequat, tincidunt placerat. Vivamus ac mauris nunc adipiscing magna nibh natoque in eleifend. Iaculis ut ultrices convallis vitae mattis urna amet odio enim. Nullam etiam amet, cursus nec nibh nulla sed ut. Non sit risus ut lacinia. Ac purus eu urna massa aliquam porta nullam ac proin. Lorem dictum enim sit eget lacus, felis dolor elementum, nibh. Dignissim in consectetur semper nunc urna sodales quisque.
                        Egestas hendrerit tincidunt quis egestas neque. Lorem urna blandit nec gravida sed nisi, etiam. Morbi massa nisl eu nisl. Lacus id velit eu turpis consectetur id dolor. Mattis facilisi sodales urna est, metus dui. Nisl sapien nunc commodo aliquet eu commodo.</p>
                </div>
                <div className="container training-word d-flex flex-wrap justify-content-between">
                    <img src={toon} alt='train' className="img-fluid toon col-lg-6 col-md-6 col-sm-12" />
                    <div className="mt-3 word-container col-lg-6 col-md-6 col-sm-12">
                        <h3 className="what-title text-left pb-5">What we do;</h3>
                        <h5 className="mt-2 word">
                            As an Innovation Hub
                        </h5>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                        <h5 className="mt-2 word">
                            As an Innovation Hub
                        </h5>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                        <h5 className="mt-2 word">
                            As an Innovation Hub
                        </h5>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                    </div>
                    <div className="register-button">

                        <button type="button" className="btn register btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Register Now
                        </button>
                        <div className="modal fade .modal-fullscreen-xxl-down" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img src={close} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-center text-primary">Fill this form to
                                            register with us now</p>
                                        <form>
                                            <input type="text" className="form-input ps-3" placeholder="Name" />
                                            <input type="text" className="form-input ps-3" placeholder="Email" />
                                            <input type="text" className="form-input ps-3" placeholder="Phone Number" />
                                            <input type="text" className="form-input ps-3" placeholder="Guardian Name" />
                                            <input type="text" className="form-input ps-3" placeholder="Guardian Phone" />
                                            <input type="text" className="form-input ps-3" placeholder="Guardian Address" />
                                            <select className="form-input ps-3" placeholder="Course">
                                                <option>Course</option>
                                                <option>Front End Development</option>
                                                <option>backend Development</option>
                                                <option>Fullstack Developmet</option>
                                                <option>Product Design</option>
                                            </select>
                                            <select className="form-input ps-3" placeholder="Duration">
                                                <option>Duration</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="modal-footer">

                                        <a type="button" className="btn btn-primary" href="#a" data-bs-target="#exampleModalToggle2">Confirm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}