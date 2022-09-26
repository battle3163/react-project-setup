import { Card, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

import Slider from "react-slick";
import { PREVIOUS_ARROW, NEXT_ARROW, NO_IMAGE } from './Settings';
export default function SlickSliderCopy(props) {
    // const images = [
    //     { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    //     { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    //     { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    //     { 'imageSrc': '/slider-image.svg', 'title': 'TEst', alt: 'TEst1' },
    //     { 'imageSrc': '/slider-foodimage.svg', 'title': 'TEst', alt: 'TEst1' },
    // ]

    const foods = props.images;

    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><img src={NEXT_ARROW} alt="No Arrow" /></div>
        );
    }
    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            ><img src={PREVIOUS_ARROW} alt="No Arrow" /></div>
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
                {foods.map((item, idx) => {
                    let imgSrc = item.imageSrc ? item.imageSrc : NO_IMAGE;
                    return (
                        <div key={idx}>
                            <Card style={{ width: '17rem' , margin:"2px",boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.16)" }}>
                                <Card.Img src={imgSrc} />
                                <Card.Body>
                                    <Card.Text>
                                    <Card.Title>{item.title}</Card.Title>
                                        {/* <p className="sub-heading">North Indian</p> */}
                                        <Form.Text muted>{item.variaty.join(" ▫ ")}</Form.Text>
                                        <p style={{ color: `${item.isAvailable ? "#007AFF" : "#FF3B30"}`,fontWeight:"500",textAlign:"center"}} >{item.isAvailable ? "CURRENTLY AVAILABLE" : "CURRENTLY NOT AVAILABLE"}</p>
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
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}