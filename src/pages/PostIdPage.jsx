import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async(id) => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data)
        console.log(comments)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div >
            <h1 style={{textAlign:'center'}}>Post page with ID {params.id}</h1>  
            { isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>   
            }
            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comment => 
                        <div key={comment.id} style={{marginTop: '15px'}}>
                            <h4>{comment.email}</h4>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage;