import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Card, Stack } from 'react-bootstrap'

import './kitchen.scss'
import { useEffect, useState } from "react";
function KitchenPage() {
    const [items, setItems] = useState([{ title: 'veg spring roll', price: '$120', count: 1 },
    { title: 'stuffed mushroom', price: '$80', count: 1 },
    { title: 'idli vada,sambhar', price: '$90', count: 1 }])

    const changeCount = (index, type) => {
        console.log("indes",index);
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

    const countFun = (index) => {
        return (<div className='inc-dec-button'>
            <ButtonGroup aria-label="Basic example">
                <Button className='inc-button' onClick={() => changeCount(index,"remove")} variant="outline-success"><span className='inc-span'>-</span></Button>
                <Button className='inc-button ' variant="success">{items[index].count}</Button>
                <Button className='inc-button' onClick={() => changeCount(index,"add")} variant="outline-success"><span className='inc-span'>+</span></Button>
            </ButtonGroup>
        </div>);
    }

    const itemsData = (type) => {
        return items.map((item, index) => {
            return (
                <ListGroup.Item>
                    {
                        type == "item" ?
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="image-text-content">
                                    <img src='/food-image.svg' alt='food' />
                                    {item.title} <br />
                                    {item.price}
                                </div>
                                {countFun(index)}
                            </div>
                            :
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="image-text-content">
                                    {item.title}
                                </div>
                                {countFun(index)}
                                {item.price}
                            </div>
                    }
                </ListGroup.Item>
            )
        })
    }

    return (
        <div >
            <div className="image-text" style={{ maxWidth: "1350px" }}>
                <img src="homepage1.png" style={{ height: "337px", width: "1350px" }}>
                </img>
                <div className="bottom-right">Top Right</div>
            </div>
            <div className="container-fluid clearfix">
                <div style={{ display: "flex",padding:"20px 0px" }}>
                    <div style={{ width: "50%" }}>
                        <span>Breakfast</span>
                        <ListGroup >
                            {itemsData("item")}
                        </ListGroup>
                    </div>
                    <div style={{ justifyContent: "center", margin: "auto", maxWidth: "50%" }}>
                        <Card>
                            <Card.Title>Your order</Card.Title>
                            <p>{items.length} items</p>
                        <ListGroup title="your order" style={{ backgroundColor: "orange" }}>
                            {itemsData("order")}
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item >
                                Subtotal : $253
                            </ListGroup.Item>
                        </ListGroup>
                        <Button>Checkout</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitchenPage;