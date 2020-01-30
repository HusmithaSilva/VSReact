import React, {Component} from 'react'
import Fcs from './Input'

class FocusInPut extends Component{

    constructor(){
        super()

        this.ComponentRef = React.createRef()
    }

    inputHandler = () => {
        this.ComponentRef.current.FocusInput()
    }

    render(){
        return(
            <div>
                <Fcs ref={this.ComponentRef}></Fcs>
                <button onClick={this.inputHandler}>focus me</button>
            </div>
        )
    }
}

export default FocusInPut