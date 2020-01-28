import React, {Component} from 'react'

class RegComp extends Component{
    render(){
        console.log('**Reg comp render**')
        return(
            <div>
                RegularComponent {this.props.Name}
            </div>
        )
    }
}
export default RegComp