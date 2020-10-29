import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  state = {
    likes: 0,
  };

addHandler = () =>{
  console.log('addHandler was clicked');
  this.setState({ 
    likes: this.state.likes + 1
  });
};

removeHandler = () =>{
  console.log('removeHandler was clicked');
  this.setState({
    likes: this.state.likes===0 ? 0 : this.state.likes-1
    });
};

resetHandler = () =>{
  console.log('resetHandler was clicked');
  this.setState({ 
    likes: 0
  });
};

  render() {
    return (
      <div className="App">
        <Header />
        <div className="likes">
        <h1 style={{backgroundColor: this.state.likes%2===0 ? 'rgb(65, 74, 76)' : 'rgb(35,43,43)'}}>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add like</button>
        <button onClick={this.removeHandler}>Remove like</button>
        <button onClick={this.resetHandler}>Reset</button>  
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;