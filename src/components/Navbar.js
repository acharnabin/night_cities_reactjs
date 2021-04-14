import React from 'react'
import '../css/navbar.css'
import PhoneIcon from '@material-ui/icons/Phone';

const Navbar = () => {
    return (
        <div className="navBar container">
        <div className="navLogo">
            nabinachar<span className="logo_color">.</span>com
        </div>
        <div className="navbtn">
            <button className="button">
                <PhoneIcon fontSize="medium"/>
                <span className="mx-2">6289689435</span>
            </button>
        </div>
    </div>
    )
}

export default Navbar
