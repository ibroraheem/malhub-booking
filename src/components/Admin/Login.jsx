import React from 'react';
import "./Login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            submit: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ submit: [{ email: this.state.email, password: this.state.password }] })
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        await fetch("https://ibro-booking-api.herokuapp.com/admin/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"

            }
        }).then(res => {
            return res.json()
        }).then((res) => {
            console.log(res)
            if (res.admin) {
                console.log("ok")
                localStorage.setItem("token", res.token)
                window.location.href = "/admin/dashboard"
            } else {
                return
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="wrapper">
                    <header>Login</header>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field email">
                            <div className="input-area">
                                <input type="text" onChange={this.handleEmailChange} placeholder="email" />
                                <i className="icon fas fa-envelope"></i>
                            </div>
                        </div>
                        <div className="field password">
                            <div className="input-area">
                                <input type="password" onChange={this.handlePasswordChange} placeholder="Password" />
                                <i className="icon fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}