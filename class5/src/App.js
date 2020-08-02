import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import tempContext from './tempContext'
import Temp from './temp';
import TempReducer from './tempReducer';
import ReducerTemp from './ReducerTemp'


function App() {
  let  [value , setValue] = useState(75)

  return (

   <div>
      <div>
      <h1>
        Context API using useState 
      </h1>

        <tempContext.Provider  value = {value}>
      <Temp />
      <button onClick={()=>setValue(++value)}>Increase</button>
      <button onClick={()=>setValue(--value)}>Decrease</button>


    
      </tempContext.Provider>

     
    </div>
   
   <div>
     <h1>
       contexAPI with useReducer 
      <ReducerTemp /> 
     </h1>
   </div>

   </div>
   
  );
}

export default App;
