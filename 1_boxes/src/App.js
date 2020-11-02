import React, {Component} from 'react';
import './App.css';
import Box from './Components/Box';

class App extends Component {
  state = {
    boxes: [
      {id: 1, name: "Aaron", title: "Big Boss", age: "29"},
      {id: 2, name: "Suvi", title: "Team Lead", age: "29"},
      {id: 3, name: "Bob", title: "New Guy", age: "19"},
      {id: 4, name: "Mark", title: "Designer", age: "25"},
      {id: 5, name: "Pekka", title: "Wizard", age: "60"},
    ],
  };

  render() {
    const boxesList = this.state.boxes.map(
      (box) => {
        return <Box key={box.id} name={box.name} title={box.title} age={box.title} />
      });
    return <div className="App"> {boxesList} </div>;
  }
}

export default App;

/* function App() {
  return (
    <div className="App">
    <Box name="Aaron" title="Big Boss" age="29"/>  
    <Box name="Suvi" title="Team Lead" age="29"/>  
    <Box name="Bob" title="New Guy" age="19"/>  
    <Box name="Mark" title="Designer" age="25"/>  
    <Box name="Pekka" title="Wizard" age="60"/>  
    </div>
  );
}

export default App; */