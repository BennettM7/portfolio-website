import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css'

export default function Navbar () {
    return (
        <div className="nav-container">
            <h5 className="website-name">Bennett Mangum's Portfolio</h5>
            <div className="nav-links">
                <NavLink exact to="/" activeClassName="active" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about-me" activeClassName="active" className="nav-link">
                    About Me
                </NavLink>
                <NavLink to="/courses" activeClassName="active" className="nav-link">
                    Courses
                </NavLink>
            </div>
        </div>
    )
}
