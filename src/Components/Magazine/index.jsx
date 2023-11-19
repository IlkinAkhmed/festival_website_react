import React from 'react'
import "./index.scss"

const Magazine = () => {
  return (
    <>
        <section id="magazine">
            <div className="texts">
                <p>MAGAZINE</p>
                <div className="interview">
                    <span className='producer'>PRODUCERS</span><span>DECEMBER 10</span>
                    <h2>INTERVIEW WITH MOVIE PRODUCER PAUL GANGE</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button className="black-button">View More</button>
            </div>
            <div className="image">
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
            </div>
        </section>
    </>
  )
}

export default Magazine