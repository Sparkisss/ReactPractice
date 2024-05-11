import React from 'react';

import './Users.css';
import searchIcon from '../users/img/member-search.svg'
import { User } from '../user/User';

export const Users = ({items,
    isLoading, 
    serachValue, 
    onChangrSearchValue, 
    invites, 
    onClickInvite,
    onClickSendInvites
    }) => {

    return (
        <>
            <div className='search'>
                <img src={searchIcon} alt="re" style={{width: '11px'}} />
                <input value={serachValue}
                    onChange={onChangrSearchValue} 
                    type="text" placeholder='Searching user...'>
                </input>
            </div>
            {
                isLoading ? (
                    <div>
                        Wait for information....
                    </div>
                ) : (
                    <ul className='users-list'>                        
                        {items.filter(obj => {
                            const fullName = (obj.first_name + obj.last_name).toLowerCase();

                            return fullName.includes(serachValue.toLowerCase()) || 
                            obj.email.toLowerCase().includes(serachValue.toLowerCase());
                        }).map((obj) => (
                            <User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj}/>
                        ))}
                    </ul>
                )}

            <button onClick={onClickSendInvites} className='send-invite-btn'>Send invitation</button>
        </>
    )
}
