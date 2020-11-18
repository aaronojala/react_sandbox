import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <div className="form">
            <form onSubmit={props.submit}>
                <div>
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" onChange={props.onChange} required></input>
                </div>
                <div>
                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" onChange={props.onChange} required></input>
                </div>
                <div>
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name="phonenumber" id="lastname" onChange={props.onChange} required></input>
                </div>
                <div>
                <label htmlFor="role">Role</label>
                <select name="role" onChange={props.onChange}>
                <option value="teacher" name="role">Teacher</option>
                <option value="student" name="role">Student</option>
                <option value="other" name="role">Other</option>
                </select>
                </div>
                <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" onChange={props.onChange} required></textarea>
                </div>
                <input className="send" type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Form;