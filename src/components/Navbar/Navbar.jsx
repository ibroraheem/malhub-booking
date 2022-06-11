import React from 'react';
import logo from "../../images/logo.png";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">
                        <img src={logo} alt="logo" />
                    </a>
                    <a href="https://malhub.com.ng" className="btn btn-primary">Go Home</a>
                </div>
            </nav>
        )
    }
}