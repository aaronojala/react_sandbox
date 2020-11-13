import React, { Component } from 'react';
import Form from './Components/Form'
import View from './Components/View'
import Popup from './Components/Popup'

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopUp: false,
  };

  changeHandler = (event) => {
    console.log('isitworking?')
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler = (event) => {
    console.log('submitWorks')
    this.setState({
      showPopUp: true,
    });
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <Form onChange={this.changeHandler} submit={this.submitHandler}/>
        <View
        firstname={this.state.firstname} 
        lastname={this.state.lastname}
        phonenumber={this.state.phonenumber}
        role={this.state.role}
        message={this.state.message}
        />
        {this.state.showPopUp && ( <Popup 
        firstname = {this.state.firstname}
        lastname = {this.state.lastname}
        phonenumber = {this.state.phonenumber}
        role = {this.state.role}
        message = {this.state.message}
        />
        )}
      </div>
    );
  }
}

export default App;
