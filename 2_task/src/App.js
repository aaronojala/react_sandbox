import React from 'react';
import Animal from './Components/Animal/Animal'
import './App.css'

const App = () => {
  return (
    <div className="cards">
      <Animal name="Dog" img="https://source.unsplash.com/UtrE5DcgEyg" />  
      <Animal name="Monkey" img="https://source.unsplash.com/4B5F388MLE4" />  
      <Animal name="Elephant" img="https://source.unsplash.com/Twm64rH8wdc" />    
    </div>
  );
};

export default App;