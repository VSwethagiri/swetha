import React from "react";
import {Link , useNavigate} from "react-router-dom"
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import axios from "axios";

function Contact() {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [querry, setQuerry]=useState()
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/contact',{name,email,querry})
         .then((result) => {
                console.log(result);
                navigate("/contact");
            })
        .catch(err=>console.log(err))

    }


    return (
        <>
        <Header />
        <div className="d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Contact Us </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control"
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="querry" className="form-label fw-bold">
                            Querry
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your querry"
                            autoComplete="off"
                            name="querry"
                            className="form-control"
                            onChange={(e)=> setQuerry(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">
                        Send
                    </button>
                    </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Contact;
