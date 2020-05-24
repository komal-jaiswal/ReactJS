import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: true
        }
    }
    render() {
        //the fourth approach is short circut operator
        return this.state.isLoggedin && <div>Hello Komal Jaiswal</div>
        
        //the third approach is using ternaary operator
        //return this.state.isLoggedin ? <div>Hello Komal</div> : <div>Hello Guest</div>

        //this is element varriable approach
        // let message;
        // if(this.state.isLoggedin){
        //     message=<div>Hello Komal</div>
        // }else{
        //     message=<div>Hello Guest</div>
        // }
        // return <div>{message}</div>

        //this first approach for rendering the data
        // if (this.state.isLoggedin) {
        //     return <div>Hello Komal</div>
        // } else {
        //    return
        //     <div>Hello Guest</div>
        // }
    }
}
export default UserGreeting