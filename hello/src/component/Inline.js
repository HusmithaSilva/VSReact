import React from 'react'

function Inline(){

    const heads = {
        fontSixe: '60px',
        color: 'blue'
    }

    return <div>
        <h1 className='error'>Hello</h1>
        <hi style={heads}>Hello</hi>
    </div>
}
export default Inline