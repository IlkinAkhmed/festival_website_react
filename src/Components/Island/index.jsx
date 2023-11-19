import React from 'react'
import "./index.scss"

const Island = () => {
    return (
        <>
            <section id='island'>
                <div className="container">
                    <h2>AUDIENCE CHOICE</h2>
                    <div className="wrapper">
                        <video controls autoPlay loop muted src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4"></video>
                        <div className="texts">
                            <p>DOUMENTARY</p>
                            <h2>LIFE ON THE ISLAND</h2>
                            <p>Documentary Film By Mirela Bagaric / Crotia 2021</p>
                            <div className="images">
                                <img alt="" src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" />
                                <img alt="" src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Island