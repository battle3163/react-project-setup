import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Card, Stack } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import './kitchen.scss'
import { useEffect, useState } from "react";
import ReactStars from 'react-rating-stars-component';
function KitchenPage() {
    const [rating, setRating] = useState(4)
    const [items, setItems] = useState([{ title: 'veg spring roll', price: '$120', count: 1 },
    { title: 'stuffed mushroom', price: '$80', count: 1 },
    { title: 'idli vada,sambhar', price: '$90', count: 1 }])

    const changeCount = (index, type) => {
        console.log("indes", index);
        let item = [...items]
        if (type == 'remove') {
            if (item[index].count > 1) {
                item[index].count = item[index].count - 1
                setItems(item)
            }
        } else {
            item[index].count = item[index].count + 1
            setItems(item)
        }
    }
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    const countFun = (index) => {
        return (<div className='inc-dec-button'>
            <ButtonGroup aria-label="Basic example">
                <Button className='inc-button' onClick={() => changeCount(index, "remove")} variant="outline-success"><span className='inc-span'>-</span></Button>
                <Button className='inc-button ' variant="success">{items[index].count}</Button>
                <Button className='inc-button' onClick={() => changeCount(index, "add")} variant="outline-success"><span className='inc-span'>+</span></Button>
            </ButtonGroup>
        </div>);
    }

    const itemsData = (type) => {
        return items.map((item, index) => {
            return (
                <ListGroup.Item>
                    {
                        type == "item" ?
                            <div className='flex items-center main-card'>
                                <div className="image-text-content">
                                    <img src='/food-image.svg' alt='food' />
                                    <div className='text-wrapper'>
                                        <p className='item-title'>{item.title}</p>
                                        <p className='item-price'>{item.price}</p>
                                    </div>
                                </div>
                                {countFun(index)}
                            </div>
                            :
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="image-text-content">
                                    {item.title}
                                </div>
                                {countFun(index)}
                                <span className='price'>{item.price}</span>
                            </div>
                    }
                </ListGroup.Item>
            )
        })
    }

    return (
        <div >
            <div className="image-text">
                <img src="homepage1.png" style={{ height: "337px", width: "1350px" }}>
                </img>
                <div className="bottom-right">Top Right</div>
            </div>
            <div className="container-fluid ">
                <div className='kitchen-detail'>
                    {/* <ReactStars
                        count={4}
                        edit={false}
                        size={40}
                        activeColor="#ffd700"
                        value={4}
                        classNames={"star-rating-c"}
                    />
                    <span>4 Rating</span> */}
                    <div className='rating-star-main'>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={30}
                        label
                        initialValue={rating}
                        readonly={true}
                        fillColor='#FFCC00'
                        iconsCount={rating}
                        fullClassName='child-span'
                        className='parent-span' // Will remove the inline style if applied
                    />
                    {/* Use rating value */}
                    <span>{rating} rating</span>
                    </div>
                    <div className='w-[50%]'>

                        <p className='details'>All of our menu items are inspired by cuisine and have been created by our head chef, (CN), after studying authentic cuisine in. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from.</p>
                    </div>
                </div>
                <div className='kitchen-main-div'>
                    <div className='left-div w-[50%]'>
                        <div className='mb-[20px]'>
                            <h3>BREAKFAST</h3>
                            <ListGroup >
                                {itemsData("item")}
                            </ListGroup>
                        </div>
                        <div>
                            <h3>LUNCH</h3>
                            <ListGroup >
                                {itemsData("item")}
                            </ListGroup>
                        </div>
                        <div>
                            <h3>Dinner</h3>
                            <ListGroup >
                                {itemsData("item")}
                            </ListGroup>
                        </div>
                    </div>
                    <div className='right-div w-[50%]'>
                        <div className='card-div'>
                            <div className='border-div'>
                                <Card>
                                    <Card.Title>Your order</Card.Title>
                                    <p className='items-length'>{items.length} items</p>
                                    <ListGroup title="your order" style={{ backgroundColor: "orange" }}>
                                        {itemsData("order")}
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroup.Item >
                                            <div className='flex justify-end'>
                                                Subtotal : <span className='subtotal'>$253</span>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <div className='checkout-button'>
                                        <Button>Checkout</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KitchenPage;