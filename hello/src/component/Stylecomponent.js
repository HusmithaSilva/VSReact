import React from 'react'
import './Style.css'

function Stylecomponent(props){
let msg = props.secondary ? 'secondary' : ''

    return (<div>
        <h1 className={msg}>Husmitha</h1>
    </div>
    )
}

export default Stylecomponent