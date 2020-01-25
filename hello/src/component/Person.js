import React from 'react'

function person({person, key}){
    return(
        <div>
            
            <h2>
             {key}   i am {person.name}
            </h2>
            <h2>
              {key}  i am {person.age} years old
            </h2>
            <h2>
              {key}  i can {person.skill}
            </h2>
            
        </div>
    )
}
export default person