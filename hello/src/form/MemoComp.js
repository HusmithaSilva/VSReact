import React from 'react'

function MeMoComponent({name}){
    console.log('rendering completed')
    return(
        <div>
            {name}
        </div>
    )
}
export default React.memo(MeMoComponent)