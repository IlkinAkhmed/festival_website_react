import React from 'react'
import "./index.scss"

const Festival = () => {
  const films = [
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-1.jpg',
      name: 'FLORA',
      title: 'Hodor Ulman/ Norway'
    },
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-2.jpg',
      name: 'THE FIFTH DAY',
      title: 'Hodor Ulman/ Norway'
    },
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-3.jpg',
      name: 'THE VIOLIN TEACHER',
      title: 'Hodor Ulman/ Norway'
    },
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-4.jpg',
      name: 'THE STRAGNE LIVES',
      title: 'Hodor Ulman/ Norway'
    },
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-5.jpg',
      name: 'BLUEBERRIES',
      title: 'Hodor Ulman/ Norway'
    },
    {
      image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-6.jpg',
      name: 'SONG OF MY PEOPLE',
      title: 'Hodor Ulman/ Norway'
    },
  ]

  return (
    <>
      <section id='festivals'>
        <div className="wrapper">
          {films && films.map((items) => 

             <div className="card">
              <img src={items.image} alt="" />
              <h1>{items.name}</h1>
              <h3>{items.title}</h3>
            </div>
          )}
        </div>
      </section>

    </>
  )
}

export default Festival