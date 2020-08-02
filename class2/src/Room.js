import React, { useState } from 'react'
import useState from 'react';


Room = ()=> {
     let [islit , setlit] = useState(true)

    return(
        <div>
            this room is {islit ? 'lit' : 'dark'}
        </div>
    )
} 