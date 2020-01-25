import React, {Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count:0
        }
        
    }

    IncrementCount(){
        // this.setState({
        //     count:this.state.count + 1
        // }, () => {console.log(this.state.count)})
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    IncrementFive(){
        this.IncrementCount()
        this.IncrementCount()
        this.IncrementCount()
        this.IncrementCount()
        this.IncrementCount()
    }

    render(){
        return(
            <div>
                count- {this.state.count}
                <br></br>
                <button onClick={() => this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Counter