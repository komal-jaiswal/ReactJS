import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'komal',
            comments: 'good girl',
            company:'SAP Labs'
        }
    }
    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }
    handleCompanyChange=(event)=>{
        this.setState ({
            company: event.target.value
        })
    }
    handler=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.company}`)
        event.preventDefault()
    }
    render() {
        const {username,comments,company}=this.state //destructuring
        return (
            <form onSubmit={this.handler}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Companies</label>
                    <select value={this.state.company} onChange={this.handleCompanyChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="js">Javascript</option>
                    </select>
                </div>
                <div>
                    <button type="submit" onClick={this.handler}>Submit</button>
                </div>
            </form>

        )
    }
}

export default Form