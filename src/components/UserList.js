import React from 'react'
import Person from './Person'

function UserList() {
    const names = ["Bruce", "Clark", "Daina"];
    const nameList = names.map((name, index) => <h2 key={index}>{index}   {name}</h2>)

    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'ReactJS'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Springboot'
        },
        {
            id: 4,
            name: 'John',
            age: 25,
            skill: 'Elasticsearch'
        }
    ]
    const personList = person.map(p => <Person key={p.id} person={p}></Person>)
    return (
        <div>
            <span>Below is the nameList</span>
            <div>{nameList}</div>
            <span>Below is person list</span>
            <div>{personList}</div>
        </div>
    )
}

export default UserList