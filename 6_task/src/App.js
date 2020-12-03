import React, { useState } from 'react';
import Form from './Components/Form'
import View from './Components/View'
import Popup from './Components/Popup'
import NotesList from './Components/NotesList/NotesList'

const App = () => {
const [note, setNote] = useState({
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

const submitHandler = (event) => {
  setShowPopup(true);
  event.preventDefault();
}


  return (
    <div>
        <Form onChange={changeHandler} submit={submitHandler}/>
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
        />
        )}
      </div>
  );
};

export default App;
