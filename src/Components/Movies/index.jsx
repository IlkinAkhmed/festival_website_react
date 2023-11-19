import React, { useState } from 'react'
import "./index.scss"
const Movies = () => {
    const [category, setCategory] = useState('all')

    function handleCat(filmCategory) {
        setCategory(filmCategory)
    }

    const movies = [
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-1.jpg',
            name: 'Blackbird',
            price: 51,
            category: 'drama'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-2.jpg',
            name: 'Lake',
            price: 42,
            oldPrice: 65,
            category: 'romance'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-3.jpg',
            name: 'Anesa',
            price: 60,
            category: 'sci-fi'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-4.jpg',
            name: 'Double Life',
            price: 15,
            oldPrice: 45,
            category: 'drama'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-5.jpg',
            name: 'Home',
            price: 22,
            category: 'comedy'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-6.jpg',
            name: 'Blaungan Kere',
            price: 30,
            category: 'drama'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-7.jpg',
            name: 'Gone',
            price: 41,
            category: 'fantacy'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-8.jpg',
            name: 'Perfect Edition',
            price: 75,
            category: 'documentary'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-9.jpg',
            name: 'Countrey',
            price: 60,
            category: 'comedy'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-10.jpg',
            name: 'Heart Eyes',
            price: 36,
            category: 'romance'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-11.jpg',
            name: 'Logan',
            price: 56,
            oldPrice: 80,
            category: 'drama'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-12.jpg',
            name: 'Milla',
            price: 21,
            category: 'drama'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-13.jpg',
            name: 'My Nice Neighboor Toti',
            price: 12,
            oldPrice: 19,
            category: 'comedy'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-14.jpg',
            name: 'Akira',
            price: 26,
            category: 'sci-fi'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-15.jpg',
            name: 'Diving',
            price: 89,
            category: 'documentary'
        },
        {
            image: 'https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/product-16.jpg',
            name: 'Penelopa Et Pierre',
            price: 17,
            category: 'romance'
        },
    ]
    return (
        <>
            <section id='movies'>
                <h2>POPULAR MOVIES</h2>
                <div className="categories">
                    <ul>
                        <li onClick={(e) => handleCat('all')}>Show All</li>
                        <li onClick={(e) => handleCat('comedy')}>Comedy</li>
                        <li onClick={(e) => handleCat('documentary')}>Documentary</li>
                        <li onClick={(e) => handleCat('drama')}>Drama</li>
                        <li onClick={(e) => handleCat('fantacy')}>Fantacy</li>
                        <li onClick={(e) => handleCat('romance')}>Romance</li>
                        <li onClick={(e) => handleCat('sci-fi')}>Sci-Fi</li>
                    </ul>
                </div>

                <div className="wrapper">
                    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="3"
                        space-between="30" free-mode="true">
                        {movies && movies
                            .filter((x) => x.category === category || category === 'all')
                            .map((items) => {
                                return <swiper-slide>
                                    <div className="card">
                                        <div className="image">
                                            <img src={items.image} alt="" />
                                        </div>
                                        <div className="texts">
                                            <h2>{items.name}</h2>
                                            <span className='old'>{items.oldPrice}</span>
                                            <span>${items.price}</span>
                                        </div>
                                    </div>
                                    <button className="white-button">Add To Basket</button>
                                </swiper-slide>
                            })}
                    </swiper-container>
                </div>
            </section>
        </>
    )
}

export default Movies