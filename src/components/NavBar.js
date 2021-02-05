import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="user-nav-div">
                <NavLink exact to={"/login"}>
                    Login
                </NavLink>
                
                <NavLink exact to={"/signup"}>
                    SignUp
                </NavLink>
                
                <NavLink exact to={`/about`} className="nav-button">
                    About
                </NavLink>
                
                <NavLink exact to={'/'}>
                    Game
                </NavLink>
                
                <button className="nav-button">Logout</button>
            </div>
        </nav>
    )
}
