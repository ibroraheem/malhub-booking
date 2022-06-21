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
        fetch("http://localhost:8000/bookedspaces")
            .then(res => res.json())
            .then(result => {
                this.setState({ bookedspaces: result.workspace });
                this.setState({ loading: false })
                console.log(result)
            },
                (error) => {
                    console.log(error);
                }
            )
    }
    getEventspaces() {
        fetch("http://localhost:8000/bookedevents")
            .then(res => res.json())
            .then(result => {
                this.setState({ events: result.events });
                this.setState({ loading: false })
                console.log(result)
            },
                (error) => {
                    console.log(error);
                }
            )
    }
    getTrainees() {
        fetch("http://localhost:8000/trainees")
            .then(res => res.json())
            .then(result => {
                this.setState({ trainees: result.trainees });
                this.setState({ loading: false })
                console.log(result)
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
                    <button className="btn btn-primary" onClick={() => this.setState({ space: true, event: false, training: false })}>Booked Spaces</button>
                    <button className="btn btn-primary" onClick={() => this.setState({ event: true, space: false, training: false })}>Booked Events</button>
                    <button className="btn btn-primary" onClick={() => this.setState({ training: true, space: false, event: false })}>Trainees</button>

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
                                    <th>Duration</th>
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
                                        <td>{trainees.duration}</td>
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
                                        <td>{events.date}</td>
                                        <td>{events.duration}</td>
                                        <td>{events.type}</td>
                                        <td>{events.happened}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>}</> :
                        <>{this.state.loading ? <p>Loading...</p> : <table className="dash-table">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Booking Expiry</th>
                                    <th>Booking Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bookedspaces.map(bookedspace =>
                                    <tr key={bookedspace._id}>
                                        <td>{bookedspace.name}</td>
                                        <td>{bookedspace.email}</td>
                                        <td>{bookedspace.to}</td>
                                        <td>Active</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>}</>}
            </div>
        )
    }
}