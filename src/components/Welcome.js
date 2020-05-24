import React, { Component } from 'react'

class Welcome extends Component {
    //destructoring props in class component

    render() {
        const { name, heroName } = this.props
        return <h2>rendering using class component
            {name} {heroName}
            {/* {this.props.name}Hero is{this.props.heroName} */}
        </h2>
    }
}

export default Welcome