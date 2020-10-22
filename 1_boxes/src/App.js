import React from 'react';
import './App.css';
import Box from './Components/Box';

function App() {
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

export default App;
