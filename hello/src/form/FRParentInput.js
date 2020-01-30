import React, {Component} from 'react'
import FRpare from './FRInput'

class ParentInput extends Component{

    constructor(){
        super()

        this.InputRef = React.createRef()
    }
    clickHandler = () => {
        this.InputRef.current.focus()
    }

    render(){
        return(
            <div>
                <FRpare ref={this.InputRef}></FRpare>
                <button onClick={this.clickHandler}>focus me</button>
            </div>
        )
    }
}

export default ParentInput