import React, {PureComponent} from 'react'

class Pepo extends PureComponent{
    render(){
        console.log('**pure comp render**')
        return(
            <div>
                PureComponent {this.props.Name}
            </div>
        )
    }
}

export default Pepo