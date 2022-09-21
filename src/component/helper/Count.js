import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function Count() {

    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='inc-dec-button'>
            <ButtonGroup aria-label="Basic example">
                <Button className='inc-button' onClick={decrement} variant="outline-success"><span className='inc-span'>-</span></Button>
                <Button className='inc-button ' variant="success">{count}</Button>
                <Button className='inc-button' onClick={() => { setCount(count + 1) }} variant="outline-success"><span className='inc-span'>+</span></Button>
            </ButtonGroup>
        </div>
    );
}

export default Count();