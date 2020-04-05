import React from 'react'
function Person({ person }) {
    return (
        <div>
            <div><h3>{person.name} and skill is{person.skill}</h3></div>
        </div>
    )
}

export default Person