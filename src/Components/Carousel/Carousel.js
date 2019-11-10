import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import hero from '../../Utils/images/hero.png'


function Carousel(){

    let data = [
        {
            headline: "DVF Secret Agent Part 1",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "DVF Secret Agent Part 2",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg",
            imgSrc: hero
        },
        {
            headline: "DVF Secret Agent Part 3",
            date: "October 15, 2017",
            des: "Join us for a private screening of DVF Secret Agent Part 3 with our special guest, director Peter Lindberg",
            imgSrc: hero
        }
    ]

    let manner = {
        autoSliding: {interval: "5s"},
        duration: "1s"
    }
    
    let sliderBox = {
        maxHeight: '580px',
        maxWidth: '1440px',
        width: '100%',
        height: '100%', 
        background: '#fff',
        marginBottom: '50px',
        overflow: 'hidden',
        scroll: 'hidden'
    }

    let itemStyle = {
        minWidth: '320px',
        height: '100%',
        margin: '0 5px', 
        padding: 0,
    }

    let buttonSetting = {
        style: {
            left: {
                display: "none"
            },
            right: {
                display: "none"
            }
        }
            
    }
    let dotsSetting = {
        placeOn: 'bottom-beneath',
        style: {
            dotSize: "10x",
            marginBottom: "20px",
            marginTop: "-50px"
        }
    }

    let textBox = {
        maxHeight: '300px',
        maxWidth: '600px',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        background: 'transparent',
        overflow: 'hidden'
    }
    
    let articleDes = data.map( (item , index) => 
        <div className="carousel-data">
            <img className="carousel-data--img" src = { item.imgSrc} alt= { item.headline } />
            <p className="carousel-data--label">Screening:</p>
            <p className="carousel-data--headline">{item.headline }</p>
            <p className="carousel-data--date">{ item.date }</p>
            <p className="carousel-data--descr">{ item.des}</p>
        </div>
    )
    
    return (
            <CarouselSlider slideCpnts = { articleDes }
                            manner = { manner }
                            sliderBoxStyle = { sliderBox }
                            itemsStyle = { itemStyle }
                            dotsSetting = { dotsSetting }
                            textBoxStyle = { textBox }
                            buttonSetting = { buttonSetting }
                            />
    )
}

export default Carousel