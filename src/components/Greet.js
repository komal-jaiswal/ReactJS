import React, { Children } from 'react'

// function Greet(){
//     return <h1>hello Komal</h1>
// }

//using arrow function
const Greet = ({ name, heroName, Children }) => {
    //one more way to destructoring props 
    //const {name,heroName}=props
    return (
        <div>
            <h1>Hello {name} {heroName}</h1>
            {Children}
        </div>
    )
}
export default Greet //we can export this compoent by any name