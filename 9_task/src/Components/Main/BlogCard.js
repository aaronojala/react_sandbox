import React from "react";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    [
      'Dark',
    ].map((variant, idx) => (
      <div className="blogCard">
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2"
        border="light"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text>
          {desc}
          </Card.Text>
          <Card.Img src={img} alt={title} />
          <Link className="link" to={link}>Read more</Link>
        </Card.Body>
      </Card>
      </div>
    ))
  )
};

{/* <div className="blogCard">
    <Card style={{ width: '17rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Img src={img} alt={title} />
        <Link to={link}>Read more!!!!</Link>
      </Card.Body>
    </Card>
  </div> */}

{/* <div className="BlogCard">
      <h2>{title}</h2>
      <em>{author}</em>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Link to={link}>Read more</Link>
    </div> */}

export default BlogCard;
