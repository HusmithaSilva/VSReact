import React from 'react'
import Person from './Person'

function nameList(){
    // const names = ['husmitha', 'imesh', 'silva']
    const person = [
        {
            name: 'tom',
            age: 23,
            skill: 'web'

        },
        {
            name: 'downey',
            age:30,
            skill: 'iron'
        },
        {
            name: 'cumberbatch',
            age:30,
            skill: 'time change'
        }
    ]

        const personList = person.map(person => <Person key = {person.name} person={person}/>)
        return(
            <div>
            {/* {
            names.map(name => <h2>{name}</h2>)
            } */}
            {personList}
            </div>
        )
    }

export default nameList