import React, {Component} from 'react'
import RegComp from'./RegularComp'
import PurComp from './PureComponent'
import meme from './MemoComp'
class parent extends Component{

    constructor(){
        super()

        this.state = {
            Name: 'Husmitha'
        }
    }

    componentDidMount(){
setInterval(()=> {
    this.setState({
        Name: 'Husmitha'
    })
}, 2000)
    }
    render(){
        console.log('***-Parent comp render-***')
        return(
            <div>
                parentcomponent
                {/* <RegComp Name={this.state.Name}></RegComp>
                <PurComp Name={this.state.Name}></PurComp> */}
                <meme name={this.state.name}></meme>

            </div>
        )
    }
}
export default parent
