import React from 'react'
import "./index.scss"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-inner">
                    <div className="footer-up">
                        <div className="logo">
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" />
                        </div>
                        <div className="details">
                            <ul>
                                <li>WHAT WE DO</li>
                                <li>ABOUT US</li>
                                <li>HELP AND FAQ</li>
                            </ul>
                            <ul>
                                <li>TEAM</li>
                                <li>CONTACT US</li>
                                <li>SPEAKERS</li>
                            </ul>
                            <ul>
                                <li>PROGRAM</li>
                                <li>SHOP</li>
                                <li>BLOG</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-down">
                        <div className="socialMedia">
                            <a href="https://www.instagram.com/ilkin_akhmed/"><i className="fa-brands fa-instagram"></i></a>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-vimeo-v"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <p>© 2023. DESIGNED BY ILKINAKHMED</p>
                        </div>
                        <div className="location">
                            <p>1316 Via del Parione Florence CA 90291, Italy</p>
                        </div>
                        <div className="signup">
                            <p>Sign Up To Newsletter<i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer