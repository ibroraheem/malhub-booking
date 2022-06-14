import React from 'react';
import cong from "../../images/cong.png";
import "./Congratulations.css"
import close from "../../images/closee.png";

export default class Congrats extends React.Component {
    render() {
        return (
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modall">
                        <div class="modal-content">
                            <div class="modal-header">

                                <img data-bs-dismiss="modal" aria-label="Close" src={close} />
                            </div>
                            <div class="modal-body ">
                                <img src={cong} alt="congrats" />
                                <h2>Congratulations</h2>
                                <p>Your registration has successfully been recorded.
                                    you can now further to our office to complete your registration.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}