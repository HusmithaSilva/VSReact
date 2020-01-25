import React from 'react'
import ParentCom from './ParentCom'

function ChildComponent(props){
    return(
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent