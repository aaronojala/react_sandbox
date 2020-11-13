import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <div className="form">
            <form>
                <div>
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" onChange={props.onChange}></input>
                </div>
                <div>
                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" onChange={props.onChange}></input>
                </div>
                <div>
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name="phonenumber" id="lastname" onChange={props.onChange}></input>
                </div>
                <div>
                <label htmlFor="role">Role</label>
                <select name="role" onChange={props.onChange}>
                <option value="lit" name="role">Lit</option>
                <option value="skrt" name="role">Skrt</option>
                <option value="ftsh" name="role">Ftsh</option>
                </select>
                </div>
                <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" onChange={props.onChange}></textarea>
                </div>
            </form>
        </div>
    );
};

export default Form;