import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

const SinglePost = () => {
    const [post, setPost] = useState();
    const [error, setError] = useState(null);
    let {id} = useParams();

    useEffect(()=> {
        if (!post) {
            axios
                .get('http://localhost:3001/posts/' + id)
                .then((res) => setPost(res.data))
                .catch(err => setError(err.message))
        }
    });

    /* let postData = undefined;

    if (id) {
        postData = <h1>Loading...</h1>;
    }

    if (post) {
        postData = (
        <div>{post.title} {post.author} {post.desc}</div>
        );
    }

    
    return postData; */

    return ( 
        error? 
        <div>
        <Alert variant="danger">
        <Alert.Heading>Blog post not found!</Alert.Heading>
        </Alert>
        </div>:
        !post? <h1>Loading...</h1>:
        <div className="desc"><p>{post.desc}</p></div>
    )
};

export default SinglePost;