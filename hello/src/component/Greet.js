import React from 'react'

//function greet(){
    const Greet = props => {
        const {name} = props
   // console.log(props)
    return (
        <div>
        <h1>Hello {name}</h1>
        {props.children}
        </div>
    )
    
    }
//}

export default Greet