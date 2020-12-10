import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      alert('New post added, nice!');
    });
  };

  return (
  <Container>
  <h1>Add a new post</h1>
  <Form onSubmit={addPostHandler}>
    <Row>
      <Col>
      <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control size="lg" type="text" name="title" id="title" onChange={changeValueHandler} placeholder="Your Title" />
        <br />
      </Col>
      <Col>
      <Form.Label htmlFor="author">Author</Form.Label>
        <Form.Control size="lg" type="text" name="author" id="author" onChange={changeValueHandler} placeholder="Write your name" />
         <br />
      </Col>   
    </Row>
    <Form.Label htmlFor="desc">Description</Form.Label>
    <Form.Control size="lg" type="text" name="desc" id="desc" onChange={changeValueHandler} placeholder="Write your description" />
    <br />
    <Form.Label htmlFor="img">Image link</Form.Label>
    <Form.Control size="lg" type="text" name="img" id="img" onChange={changeValueHandler} placeholder="Post your image link here..." />
    <br />
    <Button variant="primary" type="submit">
      Add a new post
    </Button>  
  </Form>
  </Container>
  );
};

export default NewPost;

{/* <>
      <h1>Add new post</h1>
      <form className="newPost" onSubmit={addPostHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
        </div>
        <button type="submit">Add new post</button>
      </form>
    </> */}