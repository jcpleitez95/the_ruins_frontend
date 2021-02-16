import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="user-nav-div">
                
                <NavLink exact to={`/about`} style={{fontFamily: "fantasy", color: "white"}}>
                    About
                </NavLink>
                
                <NavLink exact to={'/'} style={{fontFamily: "fantasy", color:"white"}}>
                    Game
                </NavLink>
                
                
            </div>
        </nav>
    )
}
