import React from 'react'
import './ModalWind.css'

export function ModalWind({open, setOpen}) {    

    return(
        <div className='wrap'>
            <h3>This is a modal window.</h3>            
                <div className={`overlay animated ${open ? 'show' : ''}`}>
                    <div>I did it single.</div>
                    <button onClick={() => setOpen(false)}>Hidden</button>
                </div>
            <button onClick={() => setOpen(true)}>Oppen</button>
        </div>
    )
}
