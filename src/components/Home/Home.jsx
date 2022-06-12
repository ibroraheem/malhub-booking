import React from 'react';
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Service />
                <Footer />
            </div>
        )
    }
}