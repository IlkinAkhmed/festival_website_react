import React from 'react'
import "./index.scss"

const Speakers = () => {
    const speakers = [
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img1.jpg',
            name: 'ZAHIRA WIDE',
            occupation: 'MOVIEW DIRECTOR'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img2.jpg',
            name: 'SHIN SAMARI',
            occupation: 'CASTING DIRECTOR'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-team-img3.jpg',
            name: 'KEREN HESS',
            occupation: 'SET DECORATOR'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-1.jpg',
            name: 'VICTOR GRAY',
            occupation: 'SOUND DESIGNER'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/inner-team-2.jpg',
            name: 'TRIP MCKAY',
            occupation: 'CAMERA OPERATOR'
        },
    ]
    return (
        <>
            <section id="speakers">
                <h2>SPEAKERS</h2>
                <div className="container">
                    <div className="text">
                        <p>LEARNING FROM EXPERTS</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi est recusandae obcaecati ad minima impedit officia animi quos labore!</p>
                    </div>
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="3"
                        space-between="30" free-mode="true">
                        {speakers && speakers.map((items) => {
                            return <swiper-slide>
                                <div className="card">
                                    <div className="image">
                                        <img src={items.image} alt="" />
                                    </div>
                                    <div className="texts">
                                        <h2>{items.name}</h2>
                                        <p>{items.occupation}</p>
                                    </div>
                                </div>
                                <a href="https://www.instagram.com/ilkin_akhmed/"><i className="fa-brands fa-instagram"></i></a>
                                <i className="fa-brands fa-youtube"></i>
                                <i className="fa-brands fa-vimeo-v"></i>
                            </swiper-slide>
                        })}
                    </swiper-container>
                </div>
            </section>
        </>
    )
}

export default Speakers