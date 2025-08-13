import React from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Login(){
        const [email, setEmail]=useState()
        const [password, setPassword]=useState()
        const navigate = useNavigate()
    
        const handleSubmit = (e)=>{
            e.preventDefault()
            axios.post('http://localhost:3001/login',{email,password})
            .then(result => {
                console.log(result)
                if(result.data === "success"){
                navigate('/home')
                }
            })
            .catch(err=>console.log(err))
    
        }
    return(
      <div className="d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="password" className="form-label fw-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">
                        Login
                    </button>
                    </form>
            </div>
        </div>
    )

}

export default Login;