import React, { useState } from 'react'
import "./index.scss"

const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [accordionStates, setAccordionStates] = useState(new Array(5).fill(false)); // Adjust the array size based on the number of accordion items

    const toggleAccordion = (index) => {
        const newAccordionStates = accordionStates.map((state, i) => (i === index ? !state : false));
        setAccordionStates(newAccordionStates);
    };
    return (
        <>
            <nav>
                <div className="nav-inner">
                    <div className="logo">
                        <h3>COPPOLA</h3>
                    </div>
                    <div onClick={()=>{setIsNavOpen(!isNavOpen)}} className="menuBar">
                        <div className="line1"></div>
                        <div className={`line2 ${isNavOpen ? 'd-none' : ''}`}></div>
                    </div>
                </div>
            </nav>
            <div className={`mobile-nav ${isNavOpen ? '' : 'open-mobile-nav'}`}>
                <div className="accordion">
                    <ul>
                        <li onClick={() => toggleAccordion(0)}><p>HOME <i className={`${accordionStates[0] ? 'fa-solid fa-angle-down' : 'fa-solid fa-chevron-right '}`}></i></p> 
                            <ul className= {`inner-texts ${accordionStates[0] ? 'open-accordion' : ''}`}>
                                <li>Main Home</li>
                                <li>Fullscreen Slider</li>
                                <li>Interactive Corners Showcase </li>
                                <li>Film Festival</li>
                                <li>Film Gallery</li>
                                <li>Film Banner Showcase</li>
                                <li>Film Presentation</li>
                                <li>Main Home</li>
                                <li>Fullscreen Slider</li>
                                <li>Interactive Corners Showcase </li>
                                <li>Film Festival</li>
                                <li>Film Gallery</li>
                                <li>Film Banner Showcase</li>
                                <li>Landing</li>
                            </ul>
                        </li>
                        <li onClick={() => toggleAccordion(1)}><p>PAGES <i className={`${accordionStates[1] ? 'fa-solid fa-angle-down' : 'fa-solid fa-chevron-right '}`}></i></p>
                            <ul className= {`inner-texts ${accordionStates[1] ? 'open-accordion' : ''}`}>
                                <li>About me</li>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Pricing plans</li>
                                <li>Our team</li>
                                <li>Speakers</li>
                                <li>FAQ page</li>
                                <li>Drop us a note</li>
                                <li>Get In Touch</li>
                                <li>Coming Soon</li>
                            </ul>
                        </li>
                        <li onClick={() => toggleAccordion(2)}><p>PORTFOLIO <i className={`${accordionStates[2] ? 'fa-solid fa-angle-down' : 'fa-solid fa-chevron-right '}`}></i></p> 
                            <ul className= {`inner-texts ${accordionStates[2] ? 'open-accordion' : ''}`}>
                                <li>Lists</li>
                                <li>Layouts</li>
                                <li>Hover Types</li>
                                <li>Singles</li>
                            </ul>                                   
                        </li>
                        <li onClick={() => toggleAccordion(3)}><p>BLOG <i className={`${accordionStates[3] ? 'fa-solid fa-angle-down' : 'fa-solid fa-chevron-right '}`}></i></p> 
                            <ul className= {`inner-texts ${accordionStates[3] ? 'open-accordion' : ''}`}>
                                <li>Right SideBar</li>
                                <li>Left SideBar</li>
                                <li>No SideBar</li>
                                <li>Post Types</li>
                            </ul>
                        </li>
                        <li onClick={() => toggleAccordion(4)}><p>SHOP <i className={`${accordionStates[4] ? 'fa-solid fa-angle-down' : 'fa-solid fa-chevron-right '}`}></i></p> 
                            <ul className= {`inner-texts ${accordionStates[4] ? 'open-accordion' : ''}`}>
                                <li>Product List</li>
                                <li>Product Types</li>
                                <li>Shop Layouts</li>
                                <li>Shop Pages</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default MobileNav