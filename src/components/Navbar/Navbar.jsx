import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid mx-3 px-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} width="50" alt="logo" />{" "}
            <b className="text-primary">Malhub</b>
          </Link>
          <a href="https://malhub.com.ng" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </nav>
    );
  }
}
