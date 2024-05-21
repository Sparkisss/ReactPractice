import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate = useNavigate();
    console.log(navigate)

    return (
        <div className='wrapper'>
        <div className='contain'>
            <h2>{props.post.id} {props.post.title}</h2>
            <div>
                <p>{props.post.body}</p>
            </div>
            <MyButton onClick={() => navigate.push(`/posts/${props.post.id}`)}>
                Open
            </MyButton>
            <MyButton onClick={() => props.remove(props.post)}>
                Delete
            </MyButton>
        </div>
    </div>
    );
};

export default PostItem;