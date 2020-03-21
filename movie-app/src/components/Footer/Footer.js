import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className='menu-shortcut'>
                <a>Home</a><span>|</span>
                <a>Temrs and Conditions</a><span>|</span>
                <a>Privacy Policy</a><span>|</span>
                <a>Collection Statement</a><span>|</span>
                <a>Help</a><span>|</span>
                <a>Manage Account</a>
            </div>
            <div className='copyright-text'>
                Copyright 2016 DEMO Streaming. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;