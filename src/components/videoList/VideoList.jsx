import React from 'react';
import './VideoList.css';

export function VideoList({setOpen}) {
    const [count, setCount] = React.useState(0);

    const onClickPlus = () => {
        if ((count + 1) >= 0) setOpen(true);
        setCount(count + 1);        
    }

    const onClickMinus = () => {
        if (count < 1) setOpen(false);
        setCount(count - 1);        
    }

    return(
        <div className='wrapper'>
            <h3>{count}</h3>
            <button onClick={onClickMinus} className="minus">- minus</button>
            <button onClick={onClickPlus} className="plus">+ plus</button>
        </div>
    )
}