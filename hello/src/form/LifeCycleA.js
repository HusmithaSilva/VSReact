import React, {Component} from 'react'

class LifeCycle extends Component{

    constructor(){
        super()

        this.state = {
            name: 'husmitha'
        }
        console.log('constructor created')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getderivedstatefromprops created')
        return null
    }

    componentDidMount(){
        console.log('component did mount')
    }
    render(){
        console.log('render completed')
        return(
            <div>
                LifeCycleA 
            </div>
        )
    }
}
export default LifeCycle