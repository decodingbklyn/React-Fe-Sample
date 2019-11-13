import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero from '../../Utils/images/hero.png'

function CarouselSlider(){

    const slides = [
        {
            headline: 'DVF Secret Agent Part 1',
            date: 'October 15, 2017',
            des: 'Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg',
        },
        {
            headline: 'DVF Secret Agent Part 2',
            date: 'October 15, 2017',
            des: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg',
        },
        {
            headline: 'DVF Secret Agent Part 3',
            date: 'October 15, 2017',
            des: 'Join us for a private screening of DVF Secret Agent Part 3 with our special guest, director Peter Lindberg',
        }
    ]

    return (
        <Carousel   className="carousel"
                    showArrows={ false } 
                    showStatus={ false }
                    showThumbs={ false }
                    autoPlay
                    infiniteLoop
                    swipeable
                    interval={ 5000 }
                    transitionTime={ 2000 }
                    >
            { 
                slides.map( slide => {
                    return (
                        <div className="carousel--slide" key={ slides.indexOf(slide) }>
                            <img src={ hero } className="carousel--img" alt={ slide.headline }/>
                            <div className="carousel--details">
                                <p className="carousel--label">Screening: </p>
                                <p className="carousel--headline">{ slide.headline }</p>
                                <p className="carousel--date">{ slide.date }</p>
                                <p className="carousel--descr">{ slide.des }</p>
                            </div>

                        </div>
                    )
                })  
            }
        </Carousel>
    )
}

export default CarouselSlider