import React , {useState} from 'react'
import './room.css'


const Room = ()=> {
    let [isLit , setLit] = useState(true)
    let [temp , setTemp] = useState(70)
    return(
        <div className={`room ${isLit ? 'lit' : 'dark'}` }>
          <h1>  this room is {isLit ? 'lit' : 'dark'} </h1>
          <button onClick={()=>setLit(!isLit)}>change background</button>
         

          
    <h1>temperature = {temp}</h1>
          <button onClick={()=>setTemp(++temp)}> Increase temperature</button>
          <button onClick={()=>setTemp(--temp)}> Increase temperature</button>

        </div> 
    )
}


export default Room;