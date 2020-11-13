import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" onChange={props.onChange}></input>
                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" onChange={props.onChange}></input>
                <label htmlFor="phonenumber">Phone number</label>
                <input type="text" name="phonenumber" id="lastname" onChange={props.onChange}></input>
                <label htmlFor="role">Role</label>
                <select name="role" onChange={props.onChange}>
                <option value="lit" name="role">Lit</option>
                <option value="skrt" name="role">Skrt</option>
                <option value="ftsh" name="role">Ftsh</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" onChange={props.onChange}></textarea>
                <button type="submit">Sumbit</button>
            </form>
        </div>
    );
};

export default Form;