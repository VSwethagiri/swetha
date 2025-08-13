import React from "react";
import {Link } from "react-router-dom";
function Header()
 {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                {/* Title */}
               <Link className="navbar-brand" to="/">Star Welding Works</Link>

                {/* Hamburger menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                             <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/services">services</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
