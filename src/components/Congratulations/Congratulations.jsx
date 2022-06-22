import React from 'react';
import cong from "../../images/cong.png";
import "./Congratulations.css"
import close from "../../images/closee.png";

export default class Congrats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="modal fade modall" id="ResponseModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={close} alt="close" className="close" data-dismiss="modal" />
                        </div>
                        {this.props.qrURL ?
                            <div className="modal-body">
                                <div className="text-center">
                                    <img src={cong} width={200} alt="congrats" />
                                </div>
                                <div className="p-3">
                                    <h2>Congratulations</h2>
                                    <p style={{ margin: 0 }}>Your registration has successfully been recorded.
                                        you can now further to our office to complete your registration.</p>
                                </div>
                                <img data-bs-dismiss="modal" aria-label="Close" src={this.props.qrURL} alt="Congratulation code" />
                            </div> : <div className="p-3">
                                <h2>Loading...</h2>
                                <p style={{ margin: 0 }}>Loading Response. Please wait...</p>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}
