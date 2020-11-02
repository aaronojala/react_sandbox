import React, {Component} from 'react';
import Animal from './Components/Animal/Animal';
import './App.css';

class App extends Component {
  state = {
    animals: [
      {id: 1, name: "Doggy", img: "https://source.unsplash.com/UtrE5DcgEyg"},
      {id: 2, name: "Monkey", img: "https://source.unsplash.com/4B5F388MLE4"},
      {id: 3, name: "Elephant", img: "https://source.unsplash.com/Twm64rH8wdc"},
    ],
  };

  render(){
     const animalsList = this.state.animals.map((animal) => {
       return <Animal key={animal.id} name={animal.name} img={animal.img} />
     });
     return <div className="cards"> {animalsList} </div>;
  }
}

export default App;