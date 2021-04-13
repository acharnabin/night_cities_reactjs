import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
    return (
        <div className="navBar container">
        <div className="navLogo">
            Nightcities
        </div>
        <div className="navLinks">
            <a href="/">Events</a>
            <a href="/">Tours</a>
            <a href="/">Clubs</a>
            <a href="/">Bookings</a>
        </div>
    </div>
    )
}

export default Navbar
