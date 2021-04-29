// create your App component here
import {Component} from 'react'
import React from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => this.setState({people: data.people}))
    }


    render(){
        console.log(this.state.people)
        return(
            <ul>
                {this.state.people.map(person => {
                    return <li>{person.name}</li>
                })}
            </ul>
        )
    }
}

export default App