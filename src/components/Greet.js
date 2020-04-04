import React from 'react'

// function Greet(){
//     return <h1>hello Komal</h1>
// }

//using arrow function
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} {props.heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet //we can export this compoent by any name