import React from 'react'

const Hello = () => {
    // return(
    //    <div>
    //        <h1>Hello using Jsx</h1>
    //    </div> 
    // )
    //without using JSX
    return React.createElement(
        'div',
        { id: "hello" , className:"dummyClass"},//second argument is object for tag attributes
        React.createElement('h1', null, "Hello Komal")
    )
}
export default Hello