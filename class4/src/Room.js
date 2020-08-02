import React , {useState} from 'react'


const Room = ()=> {
    let [isLit , setLit] = useState(true)
    let [temp , setTemp] = useState(70)
    return(
        <div>
          <h1>  this room is {isLit ? 'lit' : 'dark'} </h1>
    <h1>temperature = {temp}</h1>
          <button onClick={()=>setTemp(++temp)}> Increase temperature</button>
          <button onClick={()=>setTemp(--temp)}> Increase temperature</button>

        </div> 
    )
}


export default Room;