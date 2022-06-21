import React from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Workspace.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            from: '',
            to: '',
            amount: '20000',
            submit: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleToChange = this.handleToChange.bind(this)
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
    handleFromChange(event) {
        this.setState({ from: event.target.value })
    }
    handleToChange(event) {
        this.setState({ to: event.target.value })
    }
    async handleSubmit(event) {
        event.preventDefault()
        this.setState({ submit: [{ name: this.state.name, email: this.state.email, phone: this.state.phone, from: this.state.from, to: this.state.to, amount: this.state.amount }] })
        const formData = {
            name: this.state.name,
            email: this.state.email.toLowerCase(),
            phone: this.state.phone,
            from: this.state.from,
            to: this.state.to,
            amount: this.state.amount
        }
        await fetch("https://ibro-booking-api.herokuapp.com/workspace", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(res => {
            res.json()
        })
            .then(res => {
                console.log(res.url)
               
            })

    }



    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid work-hero text-light text-center pb-5">
                    <div className="col-sm-12 col-md-6 work-hero-content-wrapper py-3">
                        <div>
                            <h1 className="text-start px-3">Love your workspace,
                                and you’ll
                                love your
                                work more.</h1>
                            <p className=" text-start px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique egestas aliquam adipiscing lectus sagittis. Dui faucibus interdum rhoncus tellus erat pellentesque nulla. Et vel sagittis interdum velit pellentesque amet. Varius pulvinar egestas purus, libero urna malesuada amet mauris. Turpis tellus quis eget velit sed in ac.</p>
                            <button type="button" className="btn btn-primary mt-5 px-4 ">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="workspace container-fluid pb-5">
                    <h1 className="title text-primary mt-5 text-center mb-5 pt-5 pb-5">Workspace Booking</h1>
                    <div className="workspace-content d-flex flex-wrap justify-content-between">
                        <div className="workspace-text col-lg-6 col-md-12 col-sm-12">
                            <h2> Why We Do This</h2>
                            <p>Makers and Leaders Hub (MALhub) is an open, serene and beautiful shared workspace for startups and entrepreneurs at lower cost than they would spend on space of their own. The hub gives small businesses and ambitious entrepreneurs the platform to work and pursue their goals in a revolutionary smart way.
                            </p>
                            <h2> How?</h2>
                            <p>Our Vision - To improve the ecosystem through the power of technology.</p>
                            <p>Our Mission - To foster Nigeria's economic growth by providing job for the youths.</p>
                            <p>Our Value - Inexpensive Workspace provision. Community Of Like-Minded Professionals. Programs & Activities for Developer. Job Creation. Cool Atmosphere. Collaboration. Dignity & Respect</p>
                        </div>
                        <div className="workspace-form py-5 mt-4 col-lg-6 col-md-12 col-sm-12">
                            <p className="text-center text-primary">Fill This Form To
                                Book A Space With Us</p>

                            <form className="form px-3 py-3 text-center" onSubmit={this.handleSubmit}>
                                <input type="text" className="work-input ps-3 my-3" onChange={this.handleNameChange} placeholder="Name" />
                                <input type="email" className="work-input ps-3 my-3" onChange={this.handleEmailChange} placeholder="Email" />
                                <input type="text" className="work-input ps-3 my-3" onChange={this.handlePhoneChange} placeholder="Phone" />
                                <input type="date" className="work-input ps-3 my-3" onChange={this.handleFromChange} />
                                <input type="date" className="work-input ps-3 my-3" onChange={this.handleToChange} />
                                <br />
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