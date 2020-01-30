import React, {Component} from 'react'

class InputTy extends Component{

    constructor(){
        super()

        this.InputRef = React.createRef()
    }

    FocusInput(){
        this.InputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.InputRef}/>
            </div>
        )
    }
}
export default InputTy