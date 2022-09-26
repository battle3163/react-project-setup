import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function HomepageImage() {
    return (
        <div className="image-text">
            <img src="/homepage-mainmage.png" className="h-[337px] w-[100%]" alt='home' />
            <div className="hompage-image-text">
                <h2 className='main-heading'>Best Home Made Food</h2>
                <p className='sub-heading'>At your doorstep!!</p>
                {/* <div className='search-div'>
                    <div className="w-[13%]">
                    <InputGroup className="search-div-1">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control placeholder="Quick searches"
                                aria-label="Quick searches"
                                aria-describedby="basic-addon2" />
                        <InputGroup.Text><i className="fa fa-caret-down arrow-icon"></i></InputGroup.Text>
                    </InputGroup></div>
                    <div className='location-div'>
                        <InputGroup className="search-div-2">
                            <Form.Control
                                placeholder="Enter your delivery location"
                                aria-label="Enter your delivery location"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Locate Me
                            </Button>
                        </InputGroup>
                    </div>
                </div> */}
            </div>
        </div>
    )
}