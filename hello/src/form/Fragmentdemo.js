import React from 'react'

function sxp(){
    return(
        <React.Fragment>
            <h1>hello</h1>
            <p>Husmitha</p>
        </React.Fragment>
    )
}
export default sxp

// in console there is extra div tag and send it for dom, to prevent this use React.fragment so extra div tag gone 
//<h1> and <p> remain same 
//this is done in child component list of it