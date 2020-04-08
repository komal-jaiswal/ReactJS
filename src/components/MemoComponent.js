import React from 'react'

function MemoComponent({name}){
    console.log("rendering the memo component")
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)