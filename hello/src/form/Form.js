import React, {Component} from 'react'

class FormHandling extends Component{

    constructor(props){
        super(props)

        this.state = {
            Username: '',
            textarea: '',
            topic: 'React'
        }
    }

    handleUsername = (event) => {
        this.setState({
            Username: event.target.value
        })
    }

    textvaluechange = (event) => {
        this.setState({
            textarea: event.target.value 
        })
    }

    topicchange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitchange = event => {
        alert(`${this.state.Username} ${this.state.textarea} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.submitchange}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsername}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.textarea} onChange={this.textvaluechange}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.topicchange}>
                        <option value='React'>React</option>
                        <option value='vue'>vue</option>
                        <option value='Angular'>Angular</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default FormHandling