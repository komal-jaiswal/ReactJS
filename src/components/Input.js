import React, { Component } from 'react'

class Input extends Component {
constructor(props){
    super(props)
    this.inputRefChild=React.createRef()
}

focusInput(){
    this.inputRefChild.current.focus()
}
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefChild}></input>
                
            </div>
        )
    }
}

export default Input