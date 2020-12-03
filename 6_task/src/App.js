import React, { useState } from 'react';
import Form from './Components/Form'
import View from './Components/View'
import Popup from './Components/Popup'
import NotesList from './Components/NotesList/NotesList'
import axios from 'axios';

const App = () => {
const [note, setNote] = useState({
    id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",    
})
const [showPopup, setShowPopup] = useState(false);

const changeHandler = (event) => {
  setNote({
    ...note,
    [event.target.name]: event.target.value,
  });
};

const popupHandler = (event) => {
  setShowPopup(true);
  event.preventDefault();
};

const submitHandler = () => {
  axios.post('http://localhost:3001/notes', note);
  window.location.reload();
};

  return (
    <div>
        <Form onChange={changeHandler} submit={popupHandler}/>
        <View
        firstname={note.firstname} 
        lastname={note.lastname}
        phonenumber={note.phonenumber}
        role={note.role}
        message={note.message}
        />
        <NotesList />
        {showPopup && ( <Popup 
        firstname = {note.firstname}
        lastname = {note.lastname}
        phonenumber = {note.phonenumber}
        role = {note.role}
        message = {note.message}
        submit = {submitHandler}
        />
        )}
      </div>
  );
};

export default App;
