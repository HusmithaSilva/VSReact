import React, {Component} from 'react'

class LifeCycleB extends Component{

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

    shouldComponentUpdate(){
        console.log('LIfeB should componentupdate')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeB snapshot before update')
        return null
    }

    componentDidUpdate(){
        console.log('LifeB component did update')
    }
    render(){
        console.log('render completed')
        return(
            <div>
                LifeCycleB 
            </div>
        )
    }
}
export default LifeCycleB