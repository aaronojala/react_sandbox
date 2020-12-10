import React from 'react';
import Blog from './Blog';
import CardGroup from 'react-bootstrap/CardGroup'

const BlogPosts = () => {
    return (
        <div className="blogPosts">
            <CardGroup>
                <Blog />
            </CardGroup>
        </div>
    );
};

export default BlogPosts;