import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./components/style.css";
import s1 from "./assets/s1.webp";
import s2 from "./assets/image.png";
import s3 from "./assets/s3.jpeg";
import s4 from "./assets/s4.jpg";
import axios from "axios";

function LandingPage() {
  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [querry, setQuerry] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", { name, email, querry })
      .then((result) => {
        console.log(result);
        setSuccess(true);
        setName("");
        setEmail("");
        setQuerry("");
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => console.log(err));
  };

  const services = [
    {
      id: 1,
      name: "Arc Welding",
      image: s1,
      rate: "$50/hr",
      quality: "High Precision",
    },
    {
      id: 2,
      name: "MIG Welding",
      image: s2,
      rate: "$60/hr",
      quality: "Industrial Grade",
    },
    {
      id: 3,
      name: "TIG Welding",
      image: s3,
      rate: "$70/hr",
      quality: "Premium Finish",
    },
    {
      id: 4,
      name: "Custom Fabrication",
      image: s4,
      rate: "Custom Quote",
      quality: "Tailored to Your Needs",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* HOME SECTION */}
      <section id="home" className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="hero-title">Welcome to Star Welding Works</h1>
          <p className="hero-subtitle">
            Professional welding services with precision & quality
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">About Us</h2>
          <p className="text-center">
            At Star Welding Works, we pride ourselves on delivering exceptional
            welding solutions. With years of expertise and cutting-edge
            technology, we handle everything from small repairs to large-scale
            industrial projects. Our focus is always on quality, safety, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
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
                    <a
                      href={`/services/${service.id}`}
                      className="btn btn-light btn-sm"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5 bg-light">
        <div className="container d-flex justify-content-center">
          <div className="card p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-center mb-4">Contact Us</h2>
            {success && (
              <div className="alert alert-success text-center">
                ✅ Message Sent Successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Querry</label>
                <input
                  type="text"
                  placeholder="Enter Your querry"
                  className="form-control"
                  value={querry}
                  onChange={(e) => setQuerry(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
