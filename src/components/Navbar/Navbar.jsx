import React from 'react';
import logo from "../../images/logo.png";
import {Link} from "react-router-dom"

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <a href="https://malhub.com.ng" className="btn btn-primary">Go Home</a>
                </div>
            </nav>
        )
    }
}