import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor(){
        super()

        this.state = {
            isLogged: false
        }
    }

    render(){

        //render what is true or the lhs equal right then executed rhs otherwise render nothing 
        return this.state.isLogged && <div>Hello hus</div>

        //question mark is the syntax to check condition if true 1st part execute otherwise 2nd part execute

        // return this.state.isLogged ? (
        //     <div>Welcome hus</div>
        // ):(
        //     <div>Welcome guest</div>
        // )

        //let message is a variable render element will be asaign to message and rendered message then return 

    //     let message
    //     if(this.state.isLogged){
    //         message = <div>Hello bro</div>
    //     }else{
    //         message = <div>hello guest</div>
    //     }

    // return <div>{message}</div>

        //    if(this.state.isLogged){
        //        return  <div>Hello Bro</div>
               
        //    } else{
        //        return <div>Hello Guest</div>
               
        //    }

       
    }
}
export default UserGreeting