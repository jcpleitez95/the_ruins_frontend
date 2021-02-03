import React, { useState } from "react";
import { NavLink} from 'react-router-dom'

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    return (
        <div className="signup">
            <div className="login-form-box">
                <form className="login-form">
                    <h3>Welcome to The Ruins</h3>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Email</label>
                    <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                    <button type="submit" className='submit-button'>SignUp</button>
                </form>
                <button className="submit-button"> <NavLink exact to="/login" className='submit-button'>Login</NavLink></button>
                <button className="submit-button"> Continue as Guest</button>
            </div>
        </div>
    )
}
