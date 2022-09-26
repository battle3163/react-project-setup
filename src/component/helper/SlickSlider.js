import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import {  NO_IMAGE } from '../helper/Settings';
export default function SimpleSlider() {
    const images = [
        { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
        { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
        { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
        { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
        { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    ]

    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <img src='/slider_right.svg' alt="No Arrow" />
            </div>
        );
    }
    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><img src='/slider_left.svg' alt="No Arrow" /></div>
        );
    }
    let settings = {
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="image-wrapper">
            <Slider
                {...settings}
            >
                {images.map((item, idx) => {
                    let imgSrc = item.imageSrc ? item.imageSrc : NO_IMAGE;
                    return (
                        <div key={idx}>
                            <Card style={{ width: '18rem' }}>
                                <a href='/kitchen'>
                                    <Card.Img src={imgSrc} />
                                    <Card.Body>
                                        <Card.Text>
                                            <Card.Title>World famous</Card.Title>
                                            <p className="sub-heading">North Indian</p>
                                            <p className="available-tag">CURRENTLY AVAILABLE</p>
                                            <div className="star-div text-center">
                                                <ReactStars
                                                    count={4}
                                                    edit={false}
                                                    size={40}
                                                    activeColor="#ffd700"
                                                    value={4}
                                                    classNames={"star-rating-c"}
                                                />
                                                <span className="star-count">4</span>
                                            </div>
                                        </Card.Text>
                                    </Card.Body></a>
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}