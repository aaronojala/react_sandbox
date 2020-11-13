import React, { Component } from 'react';
import Form from './Components/Form'
import View from './Components/View'

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: ""
  };

  changeHandler = (event) => {
    console.log('isitworking?')
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    return (
      <div>
        <Form onChange={this.changeHandler}/>
        <View
        firstname={this.state.firstname} 
        lastname={this.state.lastname}
        phonenumber={this.state.phonenumber}
        role={this.state.role}
        message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
