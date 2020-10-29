import React, {Component} from 'react';
import Animal from './Components/Animal/Animal';
import './App.css';

class App extends Component {
  state = {
    animals: [
      {name: "Doggy", img: "https://source.unsplash.com/UtrE5DcgEyg"},
      {name: "Monkey", img: "https://source.unsplash.com/4B5F388MLE4"},
      {name: "Elephant", img: "https://source.unsplash.com/Twm64rH8wdc"},
    ],
  };
  render(){
    return (
      <div className="cards">
      <Animal 
      name={this.state.animals[0].name}
      img={this.state.animals[0].img}
      />     
      <Animal 
      name={this.state.animals[1].name}
      img={this.state.animals[1].img}
      />     
      <Animal 
      name={this.state.animals[2].name}
      img={this.state.animals[2].img}
      />     
      </div>
    );
  }
}

export default App;