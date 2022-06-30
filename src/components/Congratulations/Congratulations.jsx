import React from "react";
import cong from "../../images/cong.png";
import "./Congratulations.css";

export default class Congrats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="modal fade"
        id="ResponseModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content modall">
            {this.props.qrURL ? (
              <div className="modal-body text-light">
                <div className="text-center">
                  <img src={cong} width={200} alt="congrats" />
                </div>
                <div className="p-3">
                  <h2>Congratulations</h2>
                  <p style={{ margin: 0 }}>
                    Your registration has successfully been recorded. you can
                    now further to our office to complete your registration.
                  </p>
                </div>
                <div className="text-center">
                  <img
                    data-bs-dismiss="modal"
                    src={this.props.qrURL}
                    alt="Congratulation code"
                  />
                </div>
              </div>
            ) : (
              <div className="p-3 text-light">
                <h2>Loading...</h2>
                <p style={{ margin: 0 }}>Loading Response. Please wait...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
