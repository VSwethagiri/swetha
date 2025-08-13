import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./components/style.css"; // Custom CSS for background
import bgImage from "./assets/welding.webp";

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            {/* Main Section */}
            <main className="flex-grow-1">
                <div className="hero-section "
                style={{
                        background: `url(${bgImage}) center/cover no-repeat`,
                    }}>
                    <div className="overlay"></div>
                    <div className="content">
                        <h1 className="hero-title">Welcome to Star Welding Works</h1>
                        <p className="hero-subtitle">Professional welding services with precision & quality</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
