import React from 'react';
import './Box.css';

// const greeting = "Hello world again"

function Box(props) {
    return (
      <div className="box">
        {/* {greeting} */}
        <h1>{props.name}</h1>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }


export default Box;  