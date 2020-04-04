import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                //this callback is needed if you have to do some operation after button clicked
                console.log('callback function' + this.state.count)
            }
        )
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter