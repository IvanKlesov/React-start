import React from 'react';
import { useHistory } from 'react-router';
import '../styles/Post.css';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    const router = useHistory();
    return (
        <div className="post">
                <div className="post-content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}.</div>
                </div>
                <div className="post-btns">
                    <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Open</MyButton>
                </div>
                <div className="post-btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
        </div>
    )
}

export default PostItem;

