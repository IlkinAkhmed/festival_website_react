import React, { useState } from 'react'
import "./fixedNav.scss"

const FixedNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <>
            <div className="fixedNav">
                <div className="logo">
                    <div onClick={() => { setIsNavOpen(!isNavOpen) }} className="menuBar">
                        <div className="line1"></div>
                        <div className={`line2 ${isNavOpen ? 'd-none' : ''}`}></div>
                    </div>
                    <div className="logoText">
                        <h4>COPPOLA</h4>
                    </div>
                </div>
                <div className="socialMedia">
                    <a href="https://www.instagram.com/ilkin_akhmed/"><i className="fa-brands fa-instagram"></i></a>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-vimeo-v"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
            <nav className={`nav ${isNavOpen ? '' : 'open-nav'}`}>
                <div className="nav-inner">
                    <ul>
                        <li>HOME </li>
                        <li>PAGES</li>
                        <li>PORTFOLIO</li>
                        <li>BLOG</li>
                        <li>SHOP</li>
                        <li>LANDING</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default FixedNav