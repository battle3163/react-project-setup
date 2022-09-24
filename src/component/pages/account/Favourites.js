import './account.scss';
import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Figure } from 'react-bootstrap';
import SlickSlider from '../../helper/SlickSlider'
import './../homepage/homepage.scss'
import SlickSliderCopy from '../../helper/SlickSliderCopy';

function Favourites() {


    const images1 = [
        { imageSrc: '/slider-foodimage.svg', title: 'World famous 1', alt: 'World famous' ,rating:3,variaty:["North America","Pure Vage"],isAvailable:true},
        { imageSrc: '/slider-image.svg', title: 'World famous 2', alt: 'World famous' ,rating:4,variaty:["South America","Pure Vage"],isAvailable:false},
        { imageSrc: '/slider-foodimage.svg', title: 'World famous 3', alt: 'World famous' ,rating:5,variaty:["North India","Pure Vage"],isAvailable:true},
        { imageSrc: '/slider-image.svg', title: 'World famous 4', alt: 'World famous' ,rating:2.5,variaty:["North South","Pure Vage"],isAvailable:false},
        { imageSrc: '/slider-foodimage.svg', title: 'World famous 5', alt: 'World famous' ,rating:2,variaty:["South America","Pure Vage"],isAvailable:false},
        { imageSrc: '/slider-image.svg', title: 'World famous 6', alt: 'World famous' ,rating:4.5,variaty:["North America","Pure Vage"],isAvailable:true}
    ]

    return (
        <Col sm={9}>
            <Row style={{marginBottom:"3%"}}>
                <h2>Favourites</h2>
                <div className='homepage-slider'>
                    <div className='popular-kitchens'>
                        <SlickSliderCopy images={images1} />
                    </div>
                </div>
            </Row>
            <Row style={{marginBottom:"3%"}}>
                <h2>Repeat again</h2>
                <div className='homepage-slider'>
                    <div className='popular-kitchens'>
                        <SlickSliderCopy images={images1} />
                    </div>
                </div>
            </Row>
        </Col>
    )
}

export default Favourites;