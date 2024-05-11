import React from 'react'
import './ModalWind.css'

export function ModalWind({open}) {    

    return(
        <div className={`overlay animated ${open ? 'show' : ''}`}>
            <h3>This is a modal window.</h3>            
            <div >
                <div>I did it single.</div>                    
            </div>            
        </div>
    )
}
