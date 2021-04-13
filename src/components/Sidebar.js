import React from 'react'
import '../css/sidebar.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <a href="/">Search</a>
                <a href="/">Store</a>
                <a href="/">About</a>
                <IconButton>
                    <DragHandleIcon fontSize="medium"/>
                </IconButton>
            </div>

            <div className="sidebarDown">
                <IconButton className="icon-btn" >
                    <TwitterIcon fontSize="medium"/>
                </IconButton>

                <IconButton className="icon-btn">
                    <FacebookIcon fontSize="medium"/>
                </IconButton>

                <IconButton className="icon-btn">
                    <MailIcon fontSize="medium"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
