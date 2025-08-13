import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./components/style.css";
import s1 from "./assets/s1.webp";
import heroImage from "./assets/s5.jpeg";

function About() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1">
                {/* Hero Section */}
                <section className="about-hero text-white text-center d-flex align-items-center justify-content-center"
                style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        height: "300px",
                        position: "relative"
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">About Star Welding Works</h1>
                        <p className="lead">Precision. Quality. Reliability.</p>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={s1}
                                    alt="Our Workshop"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold mb-3">Who We Are</h2>
                                <p>
                                    Star Welding Works has been a trusted name in the welding industry for over 15 years.
                                    We specialize in providing high-quality welding services including arc, MIG, TIG, and
                                    custom fabrication. Our skilled team of professionals is dedicated to delivering
                                    precision work for every project, big or small.
                                </p>
                                <p>
                                    From industrial projects to small-scale repairs, we ensure our work meets the highest
                                    standards of durability and finish. We pride ourselves on our commitment to excellence,
                                    safety, and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality Section */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">Our Promise of Quality</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="p-4 bg-white shadow rounded">
                                    <h4>Precision Work</h4>
                                    <p>Every weld is crafted with attention to detail for long-lasting results.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="p-4 bg-white shadow rounded">
                                    <h4>Premium Materials</h4>
                                    <p>We use the finest quality materials to ensure the best finish and durability.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="p-4 bg-white shadow rounded">
                                    <h4>Skilled Team</h4>
                                    <p>Our team is made up of experienced welders committed to excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default About;
