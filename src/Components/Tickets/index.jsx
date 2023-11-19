import React from 'react'
import './index.scss'

const Ticekts = () => {
  return (
    <>
        <section id="ticekts">
            <h3>TICKETS</h3>
            <div className="ticket-card">
                <div className="left">
                    <h2>ONE DAY</h2>
                    <p>Type: Regular Ticket</p>
                    <p>Price: $10</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="right">
                    <div className="circle"></div>
                    <p>Buy<i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
            <div className="ticket-card black">
                <div className="left">
                    <h2>ONE DAY</h2>
                    <p>Type: Regular Ticket</p>
                    <p>Price: $10</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="right">
                    <div className="circle"></div>
                    <p>Buy<i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
            <div className="ticket-card gray">
                <div className="left">
                    <h2>ONE DAY</h2>
                    <p>Type: Regular Ticket</p>
                    <p>Price: $10</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="right">
                    <div className="circle"></div>
                    <p>Buy<i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>

            <div className="logos">
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-1.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-2.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-3.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-4.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-5.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-6.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-7.png" alt="" />
                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-8.png" alt="" />
            </div>
        </section>
    </>
  )
}

export default Ticekts