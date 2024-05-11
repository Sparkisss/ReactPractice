import React from 'react';
import './User.css';

export const User = ({id, email, first_name, last_name, onClickInvite, isInvited}) => {
    return(
        <>
        <li className='user'>
        <div>
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>
                   {email}
                </p>
                <button onClick={() => onClickInvite(id)}>{isInvited ? 'add' : 'remove'}</button>
            </div>
        </div>
    </li>
    </>
    )


}