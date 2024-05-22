import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h2>You open a page of posts with ID = {params.id}</h2>
            {isLoading
                ? <Loader/>
                :<div>{post.id}. {post.title}</div>
            }
            <h2>Comments</h2>
            {isLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm => 
                        <div style={{marginTop: 15}}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;