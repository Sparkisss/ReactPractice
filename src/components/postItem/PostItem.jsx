import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = (props) => {
    return (
        <div className='wrapper'>
        <div className='contain'>
            <h2>{props.number} {props.post.title}</h2>
            <div>
                <p>{props.post.body}</p>
            </div>
            <MyButton onClick={() => props.remove(props.post)}>
                Delete
            </MyButton>
        </div>
    </div>
    );
};

export default PostItem;