import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {

    clickHandler() {
        console.log("Button clicked from class handler")
    }

    render() {
        console.log("Purecomponent render")
        return (
            <div>
                pure component{this.props.name}
            </div>
        )
    }
}

export default PureCompo