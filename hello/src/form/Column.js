import React from 'react'

function dfn(){
    const item = []
    return(
        //div tag replace by <React.Fragment>
        <React.Fragment>
            {
                item.map(items => (
                     <React.Fragment key={items.id}>
                        <h1>Title</h1>
                <p>{items.title}</p>
                     </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Husmitha</td>
        </React.Fragment>
    )
}
export default dfn

//here multiple line there so need to wrap it with div tag but when its running browser console sys cannot have <td> 
//inside <div> there is the place where <react.fragment> comes in