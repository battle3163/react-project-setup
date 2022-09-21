import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import { PREVIOUS_ARROW, NEXT_ARROW, NO_IMAGE } from '../helper/Settings';
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
                {images.map((item, idx) => {
                    let imgSrc = item.imageSrc ? item.imageSrc : NO_IMAGE;
                    return (
                        <div key={idx}>
                            {/* <div className='image-div'>
                            <div className='img-div'>
                                <img className="product-image" onError={(e) => { e.target.src = NO_IMAGE; }} src={imgSrc} alt="test"></img></div>
                            <div className="product-title">
                                <span>{item.title}</span>
                            </div>
                        </div> */}
                            <Card style={{ width: '18rem' }}>
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
                                        {/* <span className="star-count">4</span> */}
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