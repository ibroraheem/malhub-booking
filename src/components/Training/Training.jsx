import React from 'react';
import "./Training.css";
import Navbar from "../Navbar/Navbar";
import toon from "../../images/toon.png"
import Footer from "../Footer/Footer";
import close from "../../images/close.png"
import Congrats from "../Congratulations/Congratulations";

export default class Training extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            guardianName: '',
            guardianPhone: '',
            guardianAddress: '',
            course: '',
            submit: '',
            qrURL: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleGuardianNameChange = this.handleGuardianNameChange.bind(this)
        this.handleGuardianPhoneChange = this.handleGuardianPhoneChange.bind(this)
        this.handleGuardianAddressChange = this.handleGuardianAddressChange.bind(this)
        this.handleCourseChange = this.handleCourseChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handleGuardianNameChange(event) {
        this.setState({ guardianName: event.target.value })
    }
    handleGuardianPhoneChange(event) {
        this.setState({ guardianPhone: event.target.value })
    }
    handleGuardianAddressChange(event) {
        this.setState({ guardianAddress: event.target.value })
    }
    handleCourseChange(event) {
        this.setState({ course: event.target.value })
    }


    async handleSubmit(event) {
        event.preventDefault()
        this.setState({ submit: [{ name: this.state.name, phone: this.state.phone, email: this.state.email, guardianName: this.state.guardianName, guardianPhone: this.state.guardianPhone, guardianAddress: this.state.guardianAddress, course: this.state.course, duration: this.state.duration, amount: this.state.amount }] })
        const formData =
        {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            guardianName: this.state.guardianName,
            guardianPhone: this.state.guardianPhone,
            guardianAddress: this.state.guardianAddress,
            course: this.state.course,

        }
        await fetch("https://ibro-booking-api.herokuapp.com/course", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
            .then(data => {
                console.log(data)
                if (data.url) {
                    this.setState({ qrURL: data.url })
                } else {
                    return;
                }
            })

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="training-hero container-fluid">
                    <div className=" text-center text-light container">
                        <h1>We Create, Build & Develop
                            The Tech Ecosystem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique egestas aliquam adipiscing lectus sagittis. Dui faucibus interdum rhoncus tellus erat pellentesque nulla. Et vel sagittis interdum velit pellentesque amet. Varius pulvinar egestas purus, libero urna malesuada amet mauris. Turpis tellus quis eget velit sed in ac.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div className="container-fluid training-content">
                    <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5">Training</h1>
                    <p className="text-center  mt-5 container training-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, fermentum orci mauris mi adipiscing. Mauris, in diam facilisis proin quam quis ultrices viverra nunc. Interdum nisl neque, sed massa integer sed nibh risus. Facilisis sagittis pellentesque eget sit facilisis nibh. Nibh vitae sagittis lacus et consequat pharetra, egestas. Nascetur suspendisse maecenas sed ultrices. Ac at sit risus magna nisi sed duis integer. Amet turpis pellentesque ultrices nec id libero aliquet ac.
                        Facilisis at est, quis elit, a id eu porta. Maecenas maecenas sed duis pharetra hac a augue. Ut ultricies nibh cras quis auctor consequat, mattis tristique neque. Lacus consequat felis, euismod gravida mattis elementum. Sagittis, semper nulla ac pellentesque pulvinar.
                        Lectus hendrerit non iaculis egestas fermentum vitae eros, quis risus. A mauris mattis consequat, tincidunt placerat. Vivamus ac mauris nunc adipiscing magna nibh natoque in eleifend. Iaculis ut ultrices convallis vitae mattis urna amet odio enim. Nullam etiam amet, cursus nec nibh nulla sed ut. Non sit risus ut lacinia. Ac purus eu urna massa aliquam porta nullam ac proin. Lorem dictum enim sit eget lacus, felis dolor elementum, nibh. Dignissim in consectetur semper nunc urna sodales quisque.
                        Egestas hendrerit tincidunt quis egestas neque. Lorem urna blandit nec gravida sed nisi, etiam. Morbi massa nisl eu nisl. Lacus id velit eu turpis consectetur id dolor. Mattis facilisi sodales urna est, metus dui. Nisl sapien nunc commodo aliquet eu commodo.</p>
                </div>
                <div className="container training-word d-flex flex-wrap justify-content-between">
                    <img src={toon} alt='train' className="img-fluid container toon col-lg-6 col-md-6 col-sm-12" />
                    <div className="mt-3 word-container container col-lg-6 col-md-6 col-sm-12">
                        <h2 className="what-title text-left pb-5">What we do;</h2>
                        <h4 className="mt-2 word">
                            As an Innovation Hub
                        </h4>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                        <h4 className="mt-2 word">
                            As an Innovation Hub
                        </h4>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                        <h4 className="mt-2 word">
                            As an Innovation Hub
                        </h4>
                        <p className="word-main">We are committed to building resilient innovation ecosystems in underserved university communities.</p>
                    </div>
                    <div className="register-button mt-5">

                        <a role="button" className="btn register btn-primary" data-bs-toggle="modal" href="#staticBackdrop">
                            Register Now
                        </a>
                        <div className="modal fade .modal-fullscreen-xxl-down" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img src={close} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-center text-primary">Fill this form to
                                            register with us now</p>
                                        <form onSubmit={this.handleSubmit}>
                                            <input type="text" className="form-input ps-3" onChange={this.handleNameChange} placeholder="Name" required />
                                            <input type="text" className="form-input ps-3" onChange={this.handleEmailChange} placeholder="Email" required />
                                            <input type="text" className="form-input ps-3" onChange={this.handlePhoneChange} placeholder="Phone Number" required />
                                            <input type="text" className="form-input ps-3" onChange={this.handleGuardianNameChange} placeholder="Guardian Name" required />
                                            <input type="text" className="form-input ps-3" onChange={this.handleGuardianPhoneChange} placeholder="Guardian Phone" required />
                                            <input type="text" className="form-input ps-3" onChange={this.handleGuardianAddressChange} placeholder="Guardian Address" required />
                                            <select className="form-input ps-3" onChange={this.handleCourseChange} placeholder="Course" required>
                                                <option>Course</option>
                                                <option value="Front End Development">Front End Development</option>
                                                <option value="Backend Development">Backend Development</option>
                                                <option value="Fullstack Development">Fullstack Developmet</option>
                                                <option value="Product Design">Product Design</option>
                                            </select>
                                            <input className="form-input ps-3 mb-3" placeholder="3 Months" readOnly />
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ResponseModal">Confirm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Congrats qrURL={this.state.qrURL} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}