import React from 'react'

function ChildComponent(props){
   
    return(
        <div>
            <button onClick={()=>props.handler('child')}>Click</button>
        </div>
    )
}

export default ChildComponent