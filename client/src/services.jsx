import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./components/style.css"; // Custom CSS for hover effect
import s1 from "./assets/s1.webp";
import s2 from "./assets/image.png";
import s3 from "./assets/s3.jpeg";
import s4 from "./assets/s4.jpg";

function Services() {
    const services = [
        {
            id: 1,
            name: "Plough",
            image: s1,
            rate: "$50/hr",
            quality: "High Precision"
        },
        {
            id: 2,
            name: "ARC Welding",
            image: s2,
            rate: "$60/hr",
            quality: "Industrial Grade"
        },
        {
            id: 3,
            name: "gates Welding",
            image: s3,
            rate: "$70/hr",
            quality: "Premium Finish"
        },
        {
            id: 4,
            name: "Custom Fabrication",
            image: s4,
            rate: "Custom Quote",
            quality: "Tailored to Your Needs"
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1 py-5">
                <div className="container">
                    <div className="text-center mb-5"><h2 className="fw-bold display-5 text-uppercase" style={{letterSpacing:"2px"}}>
                        Our Services
                        </h2>
                        <hr style ={{width:"80px",border:"2px solid #ff6600",margin: "10px auto"}}/>
                        </div>
                    <div className="row g-4">
                        {services.map((service) => (
                            <div key={service.id} className="col-md-3">
                                <div className="service-card position-relative">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="img-fluid w-100 h-100"
                                    />
                                    <div className="overlay">
                                        <h5 className="fw-bold">{service.name}</h5>
                                        <p className="mb-1">{service.rate}</p>
                                        <p className="mb-3">{service.quality}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Services;
