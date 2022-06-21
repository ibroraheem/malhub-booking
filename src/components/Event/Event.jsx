import React from "react";
import "./Event.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";


export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: '',
            phone: '',
            date: "",
            duration: '',
            type: '',
            submit: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleDurationChange = this.handleDurationChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    handleDateChange(event) {
        this.setState({ date: event.target.value })
    }
    handleDurationChange(event) {
        this.setState({ duration: event.target.value })
    }
    handleTypeChange(event) {
        this.setState({ type: event.target.value })
    }
    async handleSubmit(event) {
        event.preventDefault()
        this.setState({ submit: [{ name: this.state.name, email: this.state.email, phone: this.state.email, date: this.state.state, duration: this.state.duration, type: this.state.type }] })
        const formData = {
            name: this.state.name,
            email: this.state.email.toLowerCase(),
            phone: this.state.phone,
            date: this.state.date,
            duration: this.state.duration,
            type: this.state.type
        }
        await fetch("https://ibro-booking-api.herokuapp.com/event", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json()
        })
        .then(res => {
            if (res.status === 200 || res.message === "ok") {
                console.log(res.url)
                window.location.href = "/"
            } else {
                return
            }
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="event-hero container-fluid text-light">
                    <h1 className="col-sm-12 col-md-6 col-lg-6">We Create, Build & Develop
                        The Tech Ecosystem</h1>
                    <p className="col-sm-12 col-md-6 col-lg-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique egestas aliquam adipiscing lectus sagittis. Dui faucibus interdum rhoncus tellus erat pellentesque nulla. Et vel sagittis interdum velit pellentesque amet. Varius pulvinar egestas purus, libero urna malesuada amet mauris. Turpis tellus quis eget velit sed in ac.</p>
                    <button type="button" className="btn btn-primary">Learn More</button>
                </div>
                <div className="event container-fluid">
                    <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5 ">Event Hall Booking</h1>
                    <div className="workspace-content container d-flex flex-wrap ">
                        <div className="workspace-text col-lg-6 col-md-12 col-sm-12">
                            <h2>Co-Working Space</h2>
                            <p>We provide inexpensive workspace where people meet, work, network, share ideas and collaborate on projects that can improve the ecosystem.</p>
                            <h2>Incubation</h2>
                            <p>We help new and startup companies to develop by providing services such as management training, co-creation work space and business support.</p>
                            <h2>Ecosystem Development</h2>
                            <p>We improve the economic status by empowering youth, develop new technologies, and expand job opportunities in the community.</p>
                            <h2>ICT Training</h2>
                            <p>We offer intensive ICT training on web development, graphics design, UI/UX, 3D animation, robotics, office management and more.</p>
                        </div>
                        <div className="workspace-form py-5 mt-4 col-lg-6 col-md-12 col-sm-12">
                            <p className="text-center text-primary">Fill This Form To
                                Book A Space With Us</p>
                            <form className="form px-3 py-3 text-center ">
                                <input type="text" className="work-input ps-3 my-3" placeholder="Name" />
                                <input type="email" className="work-input ps-3 my-3" placeholder="Email" />
                                <input type="text" className="work-input ps-3 my-3" placeholder="Phone" />
                                <input type="date" className="work-input ps-3 my-3" placeholder="Event Date" />
                                <input type="text" className="work-input ps-3 my-3" placeholder="Event Hours" />
                                <input type="text" className="work-input ps-3 my-3" placeholder="Event Type" />
                                <input type="text" className="work-input ps-3 my-3" placeholder="Duration" /> <br />
                                <button className="btn btn-primary mt-5 work-submit" >Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}