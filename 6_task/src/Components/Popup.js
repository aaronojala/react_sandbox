import React from 'react';
import './Popup.css';


const closeHandler = () => {
    window.location.reload();
}

const Popup = (props) => {
    return (
        <div className="overlay">
            <div className="popup">
                <p>First name: <span>{props.firstname}</span></p>
                <p>Last name: <span>{props.lastname}</span></p>
                <p>Phone number: <span>{props.phonenumber}</span></p>
                <p>Role: <span>{props.role}</span></p>
                <p>Message: <span>{props.message}</span></p>
                <button onClick={props.submit}>Yes, I am sure</button>
                <button onClick={closeHandler}>Nope, don't want to post it</button>
                </div>
        </div>
    );
};

export default Popup;