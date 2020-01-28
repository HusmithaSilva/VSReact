import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

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
        return true
    }

    shouldComponentUpdate(){
        console.log('LIfeA should componentupdate')
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeA snapshot before update')
        return null
    }

    componentDidUpdate(){
        console.log('LifeA component did update')
    }

    changestate = () => {
        this.setState({
            name: 'how u doin'
        })
    }
    render(){
        console.log('render completed')
        return(
            <div>
                LifeCycleA 
                <LifeCycleB></LifeCycleB>
                <button onClick={this.changestate}>Change me</button>
            </div>
           
        )
    }
}
export default LifeCycle