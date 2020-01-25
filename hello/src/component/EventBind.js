import React, {Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            Message:'Hello'
        }
        this.classHandler = this.classHandler.bind(this)
    }

    classHandler(){
        this.setState({
            Message:'Goodbye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.Message}</div>
                <button onClick={this.classHandler}></button>
            </div>

        )
    }
}

export default EventBind