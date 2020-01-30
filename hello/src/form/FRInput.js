import React from 'react'

// function FRI(){
//     return(
//         <div>
//             <input type="text"/>
//         </div>
//     )
// }

const FRI = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 
export default FRI