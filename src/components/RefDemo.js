import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.componentRef=React.createRef()
    }

    componentDidMount() {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    handler = () => {
        alert(this.inputRef.current.value)
    }

    clickHandler=()=>{
        this.componentRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button type="button" onClick={this.handler}>click</button>
                <br/>
                <input type="text" ref={this.componentRef}></input>
                <button onClick={this.clickHandler}>component ref</button>
            </div>
        )
    }
}

export default RefDemo