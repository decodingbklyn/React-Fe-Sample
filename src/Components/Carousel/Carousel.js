import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import hero from '../../Utils/imgs/hero (2).png'


function Carousel(){

    let data = [
        {
            headline: "Screening:\n DVF Secret Agent Part 1",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "Screening:\n DVF Secret Agent Part 2",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "Screening:\n DVF Secret Agent Part 3",
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
        height: '100vh', 
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

    let textBox = {
        maxHeight: '300px',
        maxWidth: '600px',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        background: 'transparent',
    }
    let articleDes = data.map( (item , index) => 
        <div className="carousel-data">
            <img className="carousel-data--img" src = {item.imgSrc} alt= { item.headline } />
            <p className="carousel-data--headline">{item.headline }</p>
            <p className="carousel-data--date">{ item.date }</p>
            <p className="carousel-data--descr">{ item.des}</p>
        </div>
    )
    
    return (
            <CarouselSlider slideCpnts = { articleDes }
                            accEle = { accEle }
                            manner = { manner }
                            sliderBoxStyle = { sliderBox }
                            itemsStyle = { itemStyle }
                            dotsSetting = { dotsSetting }
                            textBoxStyle = { textBox }
                            />
    )
}

export default Carousel