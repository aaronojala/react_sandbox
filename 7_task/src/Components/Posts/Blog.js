import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/posts/';

const Blog = () => {
    const [title, setTitle] = useState('Hello World!');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(API).then(response => setPosts(response.data))
    }, []);

    const changeTitleHandler = () => {
        let newTitle = prompt('What should be the next title?');
        setTitle(newTitle);
    };


    return (
        <div>
            <h1 onClick={changeTitleHandler}>{title}</h1>
            <div className="posts">
                {posts.map((p) => (
                <div className="post" key={p.id}>
                    <img src={p.img} />
                    <h2>{p.title}</h2>
                    <p>{p.desc}</p>
                    <p>{p.author}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;