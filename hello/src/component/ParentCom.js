import React, { Component } from 'react'
import ChildComponent from './ChildCom'

class ParentComponent extends Component{

    constructor(){
        super()

        this.state = {
            ParentName: 'myparents'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert('Hello' + this.state.ParentName)
    }


    render(){
        return(
            <div>
                <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
                {/* <button onClick={}>Click me</button> */}
            </div>
        )
    }
}

    export default ParentComponent