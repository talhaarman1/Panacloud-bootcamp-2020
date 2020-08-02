import React , {useReducer} from 'react'
import TempReducer from './tempReducer'

const ReducerTemp = ()=>{
 const [state, dispatch] = useReducer(TempReducer,75)
    return(
        <div>
            temperature : {state}

        <br />
            <button onClick={()=>dispatch("increment")}>increase</button>
            <button onClick={()=>dispatch("decrement")}>decrease</button>

        </div>
    )
}

export default ReducerTemp