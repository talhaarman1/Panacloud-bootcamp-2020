import React , {useState} from 'react'
 

export default function Woking(params) {


    if(params.text.lenght>=params.maxLimit)
       { return <p> {params.text}</p>}
    return(
        <div>
        </div>
    )
    
}



