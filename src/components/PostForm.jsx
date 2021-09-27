import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''});
    }
    
    return (        
            <form>
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Post name" />
                <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Description name" />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>       
    )
}

export default PostForm;

