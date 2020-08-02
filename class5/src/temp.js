import React, { useContext } from 'react'
import tempContext from './tempContext'


const Temp = ()=> {

const context = useContext(tempContext)
console.log(context)
    return(
        <div>
            <h1>
                temperature is : {context}
                
            </h1>
        </div>
    )
}


export default Temp