import React, {Component} from 'react'
import RegComp from'./RegularComp'
import PurComp from './PureComponent'
import Meme from './MemoComp'
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
}, 3000)
    }
    render(){
        console.log('***-Parent comp render-***')
        return(
            <div>
                parentcomponent
                <Meme name={this.state.name}></Meme>
                {/* <RegComp Name={this.state.Name}></RegComp> */}
                {/* <PurComp Name={this.state.Name}></PurComp> */}

            </div>
        )
    }
}
export default parent
