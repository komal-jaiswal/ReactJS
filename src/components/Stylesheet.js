import React from 'react'
import './myPrimary.css'

function Stylesheet({primary}) {
    let className=primary? 'primary' : ''
    const textDecorate={
        fontSize:'24px',       
        color:'purple',
       'text-decoration': 'overline'
    }
    return (
        <div>
            {/* specify multiple classes using template literal */}
            <h3 className={`${className} font-xl`}>CSS using classname</h3>
        <p style={textDecorate}>Using Inline style</p>
        </div>
        
    )
}
export default Stylesheet