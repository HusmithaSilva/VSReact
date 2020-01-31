import React, { Component } from 'react'

class ErrBoundry extends Component{

    constructor(){
        super()

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
            return this.props.children
    }
}

export default ErrBoundry