import React from 'react'
function UserList() {
    const names = ["Bruce", "Clark", "Daina"];
    const nameList = names.map(name => <h2>{name}</h2>)

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
    const personList = person.map(p => <div><h3>{p.name} and skill is{p.skill}</h3></div>)
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