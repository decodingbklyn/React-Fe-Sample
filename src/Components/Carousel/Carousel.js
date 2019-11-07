import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import hero from '../../Utils/imgs/hero.png'


 
function Carousel(){
    let data = [
        {
            headline: "Screening: DVF Secret Agent Part 1",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "Screening: DVF Secret Agent Part 2",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "Screening: DVF Secret Agent Part 3",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 3 with our special guest, director Peter Lindberg",
            imgSrc: hero
        }
    ]

    let manner = {
        autoSliding: {interval: "5s"},
        duration: "2s"
    }
    
    let sliderBox = {
        maxHeight: '580px',
        maxWidth: '1440px',
        width: '100vw',
        height: '100%', 
        background: '#fff',
        marginBottom: '50px'
    }

    let itemStyle = {
        minWidth: '100vw',
        height: '100%',
        margin: '0 0px', 
        padding: 0
    }

    let accEle = {
        button: false, 
        dots: true
    }

    let dotsSetting = {
        placeOn: 'bottom',
        style: {
            dotSize: "5px",
            currDotColor: "rgba(155, 108, 27, 0.5)",
            marginBottom: "20px"
        }
    }
    
    
    return (
            <CarouselSlider slideItems = { data }
                            accEle = { accEle }
                            manner = { manner }
                            sliderBoxStyle = { sliderBox }
                            itemsStyle = { itemStyle }
                            dotsSetting = { dotsSetting }
                            />
    )
}

export default Carousel