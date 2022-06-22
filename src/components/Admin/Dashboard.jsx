import React from 'react';
import "./Dashboard.css";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookedspaces: [],
            trainees: [],
            events: [],
            loading: false,
            space: false,
            event: false,
            training: false,

        }
    }
    getBookedspaces() {
        fetch("https://ibro-booking-api.herokuapp.com/bookedspaces")
            .then(res => res.json())
            .then(result => {
                this.setState({ bookedspaces: result.workspace });
                this.setState({ loading: false })

            },
                (error) => {
                    console.log(error);

                }
            )
    }
    getEventspaces() {
        fetch("https://ibro-booking-api.herokuapp.com/bookedevents")
            .then(res => res.json())
            .then(result => {
                this.setState({ events: result.events });
                this.setState({ loading: false })

            },
                (error) => {
                    console.log(error);
                }
            )
    }
    getTrainees() {
        fetch("https://ibro-booking-api.herokuapp.com/trainees")
            .then(res => res.json())
            .then(result => {
                this.setState({ trainees: result.trainees });
                this.setState({ loading: false })

            },
                (error) => {
                    console.log(error);
                }
            )
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getBookedspaces();
        this.getEventspaces();
        this.getTrainees();

    }


    render() {
        return (

            <div className="dashboard container" >
                <h1 className="text-center py-3">Dashboard</h1>
                <div className="dashboard-btn-container">
                    <button className="btn btn-primary my-3 py-2" onClick={() => this.setState({ space: true, event: false, training: false })}>Booked Spaces</button>
                    <button className="btn btn-primary my-3 py-2" onClick={() => this.setState({ event: true, space: false, training: false })}>Booked Events</button>
                    <button className="btn btn-primary my-3 py-2" onClick={() => this.setState({ training: true, space: false, event: false })}>Trainees</button>

                </div>
                {this.state.training && !this.state.space && !this.state.event ?
                    <>
                        <>{this.state.loading ? <p>Loading...</p> : <table className="dash-table">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Guardian Name</th>
                                    <th>Guardian Phone</th>
                                    <th>Guardian Address</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.trainees.map(trainees =>
                                    <tr key={trainees._id}>
                                        <td>{trainees.name}</td>
                                        <td>{trainees.email}</td>
                                        <td>{trainees.phone}</td>
                                        <td>{trainees.guardianName}</td>
                                        <td>{trainees.guardianPhone}</td>
                                        <td>{trainees.guardianAddress}</td>
                                        <td>{trainees.course}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>}
                        </>
                    </> :
                    this.state.event && !this.state.space && !this.state.training ?
                        <>{this.state.loading ? <p>Loading...</p> : <table className="dash-table">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Event Date</th>
                                    <th>Event Duration</th>
                                    <th>Event Type</th>
                                    <th>Event Happened</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.events.map(events =>
                                    <tr key={events._id}>
                                        <td>{events.name}</td>
                                        <td>{events.email}</td>
                                        <td>{new Date(events.date).toDateString()}</td>
                                        <td>{events.duration}</td>
                                        <td>{events.type}</td>
                                        {new Date().getDate() > events.date ? <td>Yes</td> : <td>No</td>}
                                    </tr>
                                )}

                            </tbody>
                        </table>}</> :
                        <>{this.state.loading ? <p>Loading...</p> : <table className="dash-table">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Booking Expires</th>
                                    <th>Booking Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bookedspaces.map(bookedspace =>
                                    <tr key={bookedspace._id}>
                                        <td>{bookedspace.name}</td>
                                        <td>{bookedspace.email}</td>
                                        <td>{new Date(bookedspace.to).toDateString()}</td>
                                        {new Date() < new Date(bookedspace.to) ? <td>Active</td> : <td>Expired</td>}
                                    </tr>
                                )}

                            </tbody>
                        </table>}</>}
            </div>
        )
    }
}