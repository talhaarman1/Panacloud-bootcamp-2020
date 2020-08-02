import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import tempContext from './tempContext'
import Temp from './temp';


function App() {
  let  [value , setValue] = useState(75)

  return (

      <tempContext.Provider  value = {value}>
      <Temp />
      <button onClick={()=>setValue(++value)}>Increase</button>
      <button onClick={()=>setValue(--value)}>Decrease</button>


    
      </tempContext.Provider>
   
  );
}

export default App;
